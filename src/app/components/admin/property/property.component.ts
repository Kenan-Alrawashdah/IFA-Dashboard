import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { GroupModel } from '../models/group.model';
import { PropertyModel } from '../models/property.model';
import { AdminService } from '../services/admin.service';
import { GroupSelectComponent } from './group-select/group-select.component';

@Component({
  selector: 'ngx-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {


   allProperties:PropertyModel[];
   allGroups:GroupModel[]
  constructor(
    private adminServices:AdminService,
    private toastrService: NbToastrService
  ) {}
  
  async ngOnInit() {
   await  this.adminServices.GetAllProperties().toPromise()
    .then(
      (response)=>{
       this.allProperties = response.data
      }
    )
    await this.adminServices.GetAllGroups().toPromise()
    .then(
      (response)=>{
        this.allGroups = response.data
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
      groupId: {
        title: "Group",
        type: "string",
        valuePrepareFunction: (cell, row) => { return this.allGroups.filter(g=>g.id == row.groupId)[0].name },
        editor: {
          type: 'custom',
          valuePrepareFunction: (cell, row) => row.groupId,
          component: GroupSelectComponent,
         },
      },
    },
  };



  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      this.adminServices.DeleteProperty(event.data.id).subscribe(
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
    event.newData.group = '' ;
    if (window.confirm('Are you sure you want to save?')) {
      this.adminServices.EditProperty(event.newData).subscribe(
        (response)=>{
          if(response.success == true)
          {
            this.toastrService.success('The property edited successfully','Edited',{duration:1500})
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
    event.newData.id = 0 ;
    event.newData.group = '' ;
    this.adminServices.CreateProperty(event.newData).subscribe(
      (response)=>{
       if(response.data.id > 0)
       {
        this.toastrService.success('The property created successfully','Edited',{duration:1500})
        event.confirm.resolve(event.newData);
       }else{
        this.toastrService.danger('There is something error','Error',{duration:1500})
        event.confirm.reject();
       }
      },
      (error)=>{
        this.toastrService.danger('There is something error','Error',{duration:1500})
        console.log(error);
      }
    )
  }

}
