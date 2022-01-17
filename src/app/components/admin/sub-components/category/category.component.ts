import { Component, OnInit } from "@angular/core";
import { NbToastrService } from "@nebular/theme";
import { CategoryModel } from "../../models/category.model";
import { AdminService } from "../../services/admin.service";

@Component({
  selector: "ngx-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"],
})
export class CategoryComponent implements OnInit {

  allCategories:CategoryModel[];
  constructor(
    private adminServices:AdminService,
    private toastrService: NbToastrService
  ) {}
  
  async ngOnInit() {
   await  this.adminServices.GetAllCategories().toPromise()
    .then(
      (response)=>{
        this.allCategories= response.data
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
      name: {
        title: "Name",
        type: "string",
      },
      description: {
        title: "Description",
        type: "string",
      },
      numberOfGroups: {
        title: "Number of groups ",
        type: "number",
        editable: false,
        addable: false,
      },
    },
  };



  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      this.adminServices.DeleteCategory(event.data.id).subscribe(
        (response)=>{
          if(response.success == true)
          {
            event.confirm.resolve();
            this.toastrService.success('The category deleted successfully','Deleted',{duration:1500})
          }   else {
            this.toastrService.danger('There is something error','Error',{duration:1500})
            event.confirm.reject();
          }

        }
      )
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event): void {
    if (window.confirm('Are you sure you want to save?')) {
      this.adminServices.EditCategory(event.newData).subscribe(
        (response)=>{
          if(response.success == true)
          {
            this.toastrService.success('The category edited successfully','Edited',{duration:1500})
            event.confirm.resolve(event.newData);
          }else{
            this.toastrService.danger('There is something error','Error',{duration:1500})
            event.confirm.reject();
          }
        }
      )
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event): void {
    event.newData.numberOfGroups = 0 ;
    this.adminServices.CreateCategory(event.newData).subscribe(
      (response)=>{
       if(response.data.id > 0)
       {
        this.toastrService.success('The category created successfully','Edited',{duration:1500})
        event.confirm.resolve(event.newData);
       }else{
        this.toastrService.danger('There is something error','Error',{duration:1500})
        event.confirm.reject();
       }
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
