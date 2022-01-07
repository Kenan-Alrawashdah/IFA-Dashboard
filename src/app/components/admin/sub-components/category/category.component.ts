import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../../../@core/data/smart-table";
import { CategoryModel } from "../../models/category.model";

@Component({
  selector: "ngx-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"],
})
export class CategoryComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  settings = {
    //To disable add button
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

  source2: CategoryModel[] = [
    { numberOfGroups: 10, id: 1, name: "asdf", description: "ddasfd" },
    { numberOfGroups: 20, id: 1, name: "asdf", description: "asfd" },
    { numberOfGroups: 10, id: 1, name: "asdf", description: "asfd" },

  ];

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event): void {
    // if (window.confirm('Are you sure you want to save?')) {
    //   event.newData['name'] += ' + added in code';
    //   event.confirm.resolve(event.newData);
    // } else {
    //   event.confirm.reject();
    // }
    console.log(event.newData);
    event.confirm.resolve();
  }

  onCreateConfirm(event): void {
    event.confirm.resolve(event.newData);
  }
}
