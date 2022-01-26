import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { StoreModel } from '../../models/store.model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'ngx-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  allStores:StoreModel[];
  constructor(
    private adminServices:AdminService,
    private toastrService: NbToastrService
  ) {}
  
  async ngOnInit() {
   await  this.adminServices.GetAllApprovedStores().toPromise()
    .then(
      (response)=>{
        this.allStores= response.data
      }
    )
  }

  settings = {
    actions:{
      add:false,
      edit:false,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      firstName: {
        title: "First Name"
      },
      lastName: {
        title: "Last Name"
      },
      email: {
        title: "Email"
      },
      storeName: {
        title: "Store Name"
      },
      username: {
        title: "Username"
      }
    },
  };




  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      this.adminServices
        .DeleteStore(event.data.id)
        .subscribe((response) => {

          if (response.success == true) {
            this.toastrService.success(
              "The store deleted successfully",
              "Deleted",
              { duration: 1500 }
            );
            this.ngOnInit();
          } else {
            this.ngOnInit();
            this.toastrService.danger("There is something error", "Error", {
              duration: 1500,
            });
          }
        });
    }
  }

}
