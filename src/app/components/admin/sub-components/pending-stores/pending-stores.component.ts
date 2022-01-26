import { Component, OnInit } from "@angular/core";
import { NbToastrService } from "@nebular/theme";
import { StoreModel } from "../../models/store.model";
import { AdminService } from "../../services/admin.service";

@Component({
  selector: "ngx-pending-stores",
  templateUrl: "./pending-stores.component.html",
  styleUrls: ["./pending-stores.component.scss"],
})
export class PendingStoresComponent implements OnInit {
  allStores: StoreModel[];
  constructor(
    private adminServices: AdminService,
    private toastrService: NbToastrService
  ) {}

  async ngOnInit() {
    await this.adminServices
      .GetAllNotApprovedStores()
      .toPromise()
      .then((response) => {
        this.allStores = response.data;
      });
  }

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: [
        {
          name: "accept",
          title: '<i class="nb-checkmark inline-block width: 50px"></i>',
        },
        {
          name: "deny",
          title: '<i class="nb-close inline-block width: 50px"></i>',
        },
      ],
    },
    columns: {
      firstName: {
        title: "First Name",
      },
      lastName: {
        title: "Last Name",
      },
      email: {
        title: "Email",
      },
      storeName: {
        title: "Store Name",
      },
      username: {
        title: "Username",
      },
    },
  };

  onCustomAction(event): void {
    if (event.action == "accept") {
      if (window.confirm("Are you sure you want to accept ?")) {
        this.adminServices.ApproveStore(event.data.id).subscribe((response) => {
          if (response.success == true) {
            this.ngOnInit();
            this.toastrService.success(
              "The store  accept successfully",
              "Accepted",
              { duration: 1500 }
            );
          } else {
            this.toastrService.danger("There is something error", "Error", {
              duration: 1500,
            });
          }
        });
      }
    }

    if (event.action == "deny") {
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
}
