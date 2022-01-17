import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { CategoryModel } from '../../../admin/models/category.model';
import { PropertyModel } from '../../../admin/models/property.model';
import { ColorModel } from '../../module/color.model';
import { GroupModel } from '../../module/GroupWithProperty.model';
import { SizeModel } from '../../module/size.model';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'ngx-add-garments',
  templateUrl: './add-garments.component.html',
  styleUrls: ['./add-garments.component.scss']
})
export class AddGarmentsComponent  {

  loading:boolean = false; 
  imageFile : File = null ;
  addGarmentForm:FormGroup;
  categories:CategoryModel[];
  colors:ColorModel[];
  sizes: SizeModel[];
  Groups:GroupModel [];
  url:any ; 
  sizeIds:number[]= [];
  CategoryId:number =0;
  constructor(
    protected ref: NbDialogRef<AddGarmentsComponent>,
    public fb: FormBuilder,
    private storeService:StoreService)
   {
    this.categories = storeService.categories;
   // this.properties = storeService.properties;
    this.colors = storeService.colors;


    this.addGarmentForm = this.fb.group({
      Name: ['',Validators.required],
      Description: [null,Validators.required],
      Brand: [null,Validators.required],
      Price: [null,Validators.required],
      Colors: [null,Validators.required],
      Sizes: [null,Validators.required],
      Image: [null]
    })
  }




  onCategorySelected(){
    this.loading = true; 
    this.sizeIds = [];
    this.Groups = []; 
    this.storeService.GetSizeByCategoryId(this.CategoryId).subscribe(
      (response)=>{
        this.sizes = response.data
      }
    )
    this.storeService.GetGroups(this.CategoryId).subscribe(
      (response)=>{
        this.Groups = response.data
        this.loading = false; 
      }
    )

  }

  onFileSelected(event){
    this.imageFile =<File> event.target.files[0];
    var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			//this.msg = "";
			this.url = reader.result;
     }
    console.log(this.url )
  }

  cancel() {
    this.ref.close();
  }
  submit() {
    let form:FormData = new FormData();
    form.append('id','0')
    form.append('name',this.addGarmentForm.value.Name)
    form.append('description',this.addGarmentForm.value.Description)
    form.append('brand',this.addGarmentForm.value.Brand)
    form.append('price',this.addGarmentForm.value.Price)
    form.append('categoryId',this.CategoryId.toString())
    this.addGarmentForm.value.Colors.forEach(element => {
      
      form.append('colors',element)
    });
    this.Groups.forEach(element => {
     console.log(element.Property) 
      if(element.Property != null )
      {
        form.append('properties',element.Property.toString())
      }
    }); 
     this.sizes.forEach(element => {
      form.append('sizes',element.id.toString())
    });

   form.append('imagesFiles',this.imageFile,this.imageFile.name)


   this.ref.close(form);
  }



}
