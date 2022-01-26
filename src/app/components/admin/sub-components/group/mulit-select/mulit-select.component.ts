import { Component, Injectable, Input, OnInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';
import { CategoryModel } from '../../../models/category.model';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'ngx-mulit-select',
  templateUrl: './mulit-select.component.html',
  styleUrls: ['./mulit-select.component.scss']
})
@Injectable({
  providedIn:'root'
})
export class MulitSelectComponent extends DefaultEditor {

  selected:any[];

  categories:CategoryModel[]
  constructor(
   private adminService:AdminService
  ) {
    
    super();
    this.adminService.GetAllCategories().subscribe(
      (response)=>{
          this.categories = response.data
      }
    )
  }
  ngOnInit() {
  }

}
