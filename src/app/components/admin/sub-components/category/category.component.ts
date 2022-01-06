import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { CategoryModel } from '../../models/category.model';

@Component({
  selector: 'ngx-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {


ngOnInit(): void {
    
}

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true
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
      id: {
        title: 'ID',
        type: 'number',
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },

    },
  };

  source: LocalDataSource = new LocalDataSource();

  source2:CategoryModel[] = [
     {age : 10 , id : 1 , email : 'asdf',firstName : 'asfd',lastName:'sadf',username : 'sadf'},
     {age : 10 , id : 1 , email : 'asdf',firstName : 'asfd',lastName:'sadf',username : 'sadf'},
     {age : 10 , id : 1 , email : 'asdf',firstName : 'asfd',lastName:'sadf',username : 'sadf'},
  ] 

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

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
