import { Component, OnInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';
import { GroupModel } from '../../../models/group.model';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'ngx-group-select',
  template: `
        <nb-select style="width: 230px;" [(ngModel)]="cell.newValue" placeholder="Multiple Select">
        <nb-option *ngFor="let item of groups" [value]="item.id">{{item.name}}</nb-option>
      </nb-select>
     `,
  styleUrls: ['./group-select.component.scss']
})
export class GroupSelectComponent extends DefaultEditor {

  groups :GroupModel[]
  constructor(
    private adminService:AdminService
  ) { 
    super()
    this.adminService.GetAllGroups().subscribe(
      (response)=>{
        this.groups = response.data
      }
    )
  }


}
