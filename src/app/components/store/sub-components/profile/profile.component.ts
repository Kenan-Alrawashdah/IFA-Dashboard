import { StoreService } from './../../services/store.service';
import { Component, OnInit, TemplateRef } from "@angular/core";
import { NbDialogService, NbToastrService } from "@nebular/theme";
import { Profile } from "../../module/profile";
import { Constants } from '../../../../constants/constants';

@Component({
  selector: "ngx-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  imageFile : File = null ;
   profileInfo : Profile;
   imageHost:string  =  Constants.BaseURL +'Images/'
  constructor(private dialogService: NbDialogService, private storeService : StoreService,
    private toastrService: NbToastrService) {}

  ngOnInit(): void {
    this.getProfile();
  }


   getProfile(){
      this.storeService.Profile().subscribe((res)=>{
        if(res.success){
              console.log("profile :" + res.data);
              this.profileInfo = res.data;
        }
      })
   }

   onFileSelected(event){
     this.imageFile =<File> event.target.files[0];

     let form:FormData = new FormData(); 
     form.append('photo',this.imageFile,this.imageFile.name)
    this.storeService.AddImage(form).subscribe(
      (response)=>{
        if(response.success)
        {
          this.toastrService.success('Image edited successfully','Edited',{duration:1500})

          this.profileInfo.stroePhoto = response.data;
        }
        else{
          this.toastrService.danger(response.errors[0],'Error',{duration:2500})
        }
      },
      (error)=>{
        this.toastrService.danger(error.error.errors[0],'Error',{duration:2500})
      }
    )
  }



  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      country: {
        title: "country",
        type: "string",
      },
      city: {
        title: "city",
        type: "string",
      },
      street: {
        title: "street ",
        type: "number",
      },
      phoneNumber: {
        title: "phoneNumber",
        type: "string",
      },
    },
  };
  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      // this.adminServices.DeleteCategory(event.data.id).subscribe((response) => {
      //   if (response.success == true) {
      //     event.confirm.resolve();
      //     this.toastrService.success(
      //       "The category deleted successfully",
      //       "Deleted",
      //       { duration: 1500 }
      //     );
      //   } else {
      //     this.toastrService.danger("There is something error", "Error", {
      //       duration: 1500,
      //     });
      //     event.confirm.reject();
      //   }
      // });
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event): void {
    if (window.confirm("Are you sure you want to save?")) {
      // this.adminServices.EditCategory(event.newData).subscribe((response) => {
      //   if (response.success == true) {
      //     this.toastrService.success(
      //       "The category edited successfully",
      //       "Edited",
      //       { duration: 1500 }
      //     );
      //     event.confirm.resolve(event.newData);
      //   } else {
      //     this.toastrService.danger("There is something error", "Error", {
      //       duration: 1500,
      //     });
      //     event.confirm.reject();
      //   }
      // });
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event): void {
    event.newData.numberOfGroups = 0;
    // this.adminServices.CreateCategory(event.newData).subscribe(
    //   (response) => {
    //     if (response.data.id > 0) {
    //       this.toastrService.success(
    //         "The category created successfully",
    //         "Edited",
    //         { duration: 1500 }
    //       );
    //       event.confirm.resolve(event.newData);
    //     } else {
    //       this.toastrService.danger("There is something error", "Error", {
    //         duration: 1500,
    //       });
    //       event.confirm.reject();
    //     }
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      context: "this is some additional data passed to dialog",
    });
  }
}
