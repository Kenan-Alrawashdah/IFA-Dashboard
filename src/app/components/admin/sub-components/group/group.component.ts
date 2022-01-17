import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { CategoryModel } from '../../models/category.model';
import { GroupModel } from '../../models/group.model';
import { AdminService } from '../../services/admin.service';
import { MulitSelectComponent } from './mulit-select/mulit-select.component';

@Component({
  selector: 'ngx-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  allGroups:GroupModel[];
  allCategories:CategoryModel[];
  constructor(
    private dialogService: NbDialogService,
    private adminService:AdminService,
    private toastrService: NbToastrService,
    ) {}

  ngOnInit(): void {
    this.adminService.GetAllGroups().subscribe(
      (response)=>{
        if(response.success == true)
        {
          this.allGroups = response.data
        }else{
          this.toastrService.danger('There is something error','Error',{duration:1500});
        }
      }
    );
    this.adminService.GetAllCategories().subscribe(
      (response)=>{
          this.allCategories = response.data
      }
    )
  }

  
    settings = {
    //  To disable add button
      // actions: {
      //   add: false
      // },
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
        confirmSave: true
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
       confirmDelete: true,
      },
      columns: {
        name: {
          title: 'Name',
          type: 'string',
        },
        description: {
          title: 'Description',
          type: 'string',
        },
        numberOfPropriety: {
          title: 'Number of propriety ',
          type: 'number',
          editable: false,
          addable: false,
        },
        categorys: {
          title: 'categories',
          type: 'list',
          valuePrepareFunction: (cell, row) => { 
            let categoriesNames = this.allCategories.filter(c=>row.categorys.includes(c.id))
            let str :string = ''; 
            categoriesNames.forEach((element, index, array) => {
              if (index === (array.length -1)) {
              str += element.name

            }else{
              str += element.name + ' , '
            }
            }); 
            return str;
          },
          editor: {
            type: 'custom',
            valuePrepareFunction: (cell, row) => row,
            component: MulitSelectComponent,
           },
        },
      },
    };
 
    onDeleteConfirm(event): void {
      if (window.confirm("Are you sure you want to delete?")) {
        this.adminService.DeleteGroup(event.data.id).subscribe(
          (response)=>{
            
            if(response.success == true)
            {
              event.confirm.resolve();
              this.toastrService.success('The group deleted successfully','Deleted',{duration:1500})
            }else {
              this.toastrService.danger('There is something error','Error',{duration:1500})
              event.confirm.reject();
            }
          }
        )
      } else {
        event.confirm.reject();
      }
    }
  
    onSaveConfirm(event):void {
      let numberOfProperity =event.newData.numberOfPropriety;
      this.adminService.EditGroup(event.newData).subscribe(
        (response)=>{
          if(response.success == true)
          {
            this.toastrService.success('Group edited successfully','Edited',{duration:1500})
            event.newData.numberOfPropriety = numberOfProperity;
            event.confirm.resolve(event.newData);
          }else{
            this.toastrService.danger(response.errors,'Error',{duration:1500});
          }
        }
      )
    }
  
    onCreateConfirm(event):void { 
     event.newData.id = 0;
      this.adminService.CreateGroup(event.newData).subscribe(
        (response)=>{
          if(response.success == true)
          {
            this.toastrService.success('Group created successfully','Created',{duration:1500})
            event.confirm.resolve(response.data);
          }else{
            this.toastrService.danger(response.errors,'Error',{duration:1500});
          }
        }
      )
    }

}
