import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { CategoryModel } from '../../models/category.model';
import { GroupModel } from '../../models/group.model';

@Component({
  selector: 'ngx-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.scss']
})
export class GroupAddComponent  {

  addGroupForm:FormGroup ;
  categoryId:number;
  categorySelectedList:CategoryModel[]=[];
  constructor(protected ref: NbDialogRef<GroupAddComponent>) {
    this.addGroupForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
    }
    )
  }
  categories:CategoryModel[] = [
    { id : 1 , name : '1111',description : 'ddasfd',numberOfGroups:0},
    { id : 2 , name : '22222',description : 'asfd',numberOfGroups:0},
    { id : 3 , name : '3333',description : 'asfd',numberOfGroups:0},
 ] 

  cancel() {
    this.ref.close();
  }
  onSelect()
  {
    console.log('this.categoryId')

    let exist = this.categorySelectedList.find(c=>c.id == this.categoryId)
    if(exist == null)
    {
      console.log(this.categoryId)
      let c =  this.categories.find(c=>c.id == this.categoryId)
      console.log(c);
      this.categorySelectedList.push(c)
    }else
    {

    }
    
  }

  submit() {
    this.ref.close(this.addGroupForm.value);
  }

}
