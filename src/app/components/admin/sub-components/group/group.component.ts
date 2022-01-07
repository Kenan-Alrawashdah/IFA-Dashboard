import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { CategoryModel } from '../../models/category.model';
import { GroupModel } from '../../models/group.model';
import { GroupAddComponent } from '../group-add/group-add.component';

@Component({
  selector: 'ngx-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  names: string[] = [];
  constructor(private dialogService: NbDialogService) {
  }

  ngOnInit(): void {
  }
  openAdd() {
    // debugger
    this.dialogService.open(GroupAddComponent)
      .onClose.subscribe()
  }
  
    settings = {
    //  To disable add button
      actions: {
        add: false
      },
      // add: {
      //   addButtonContent: '<i class="nb-plus"></i>',
      //   createButtonContent: '<i class="nb-checkmark"></i>',
      //   cancelButtonContent: '<i class="nb-close"></i>',
      //   confirmCreate: true,
      // },
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
        categories: {
          title: 'categories',
          type: 'string',
          editor: {
            type: 'list',
            config: {
              list: [
              { value: 'Antonette', title: 'Antonette' }, 
              { value: 'Bret', title: 'Bret' },
              { value: '<b>Samantha</b>',title: 'Samantha'}]
            }
          }
        },
      },
    };
  
  
    source2:GroupModel[] = [
       { id : 1 , name : 'asdf',description : 'ddasfd',numberOfPropriety:10,categories :['asssd','12']},
       { id : 1 , name : 'asdf',description : 'asfd',numberOfPropriety:10,categories :['asd','asd']},
       { id : 1 , name : 'asdf',description : 'asfd',numberOfPropriety:10,categories :['asd','asd']},
    ] 
  
   
  
    onDeleteConfirm(event):void {
      if (window.confirm('Are you sure you want to delete?')) {
        event.confirm.resolve(); 
      } else {
        event.confirm.reject();
      }
    }
  
    onSaveConfirm(event):void {
      // if (window.confirm('Are you sure you want to save?')) {
      //   event.newData['name'] += ' + added in code'; 
      //   event.confirm.resolve(event.newData);
      // } else {
      //   event.confirm.reject();
      // }
      console.log(event.newData)
      event.confirm.resolve();
    }
  
    onCreateConfirm(event):void { 
        event.confirm.resolve(event.newData);
    }

}
