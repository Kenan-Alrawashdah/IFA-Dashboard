import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { CategoryModel } from '../../../admin/models/category.model';
import { PropertyModel } from '../../../admin/models/property.model';
import { ColorModel } from '../../module/color.model';
import { SizeModel } from '../../module/size.model';
import { Garment } from '../../module/tabs.model';
import { StoreService } from '../../services/store.service';
import { AddGarmentsComponent } from '../add-garments/add-garments.component';

@Component({
  selector: 'ngx-edit-garment',
  templateUrl: './edit-garment.component.html',
  styleUrls: ['./edit-garment.component.scss']
})
export class EditGarmentComponent  {

  imageFile : File = null ;
  addGarmentForm:FormGroup;
  categories:CategoryModel[];
  properties:PropertyModel[];
  colors:ColorModel[];
  sizes: SizeModel[];
  garment:Garment;

  sizeIds:number[]= [];
  CategoryId:number =0;
  constructor(
    protected ref: NbDialogRef<EditGarmentComponent>,
    public fb: FormBuilder,
    private storeService:StoreService)
   {
     this.garment = storeService.garment;
    this.categories = storeService.categories;
    this.properties = storeService.properties;
    this.colors = storeService.colors;
    this.CategoryId = this.garment.categoryId;
    this.storeService.GetSizeByCategoryId(this.CategoryId).subscribe(
      (response)=>{
         this.sizes = response.data
        response.data.forEach(element => {
          this.sizeIds.push(element.id)
         });
      }
    )
    this.addGarmentForm = this.fb.group({
      Name: [this.garment.name,Validators.required],
      Description: [this.garment.description,Validators.required],
      Brand: [this.garment.brand,Validators.required],
      Price: [this.garment.price,Validators.required],
      Colors: [this.garment.colorsOfId,Validators.required],
      Properties: [this.garment.properties,Validators.required],
      Sizes: [this.garment.sizesOfId,Validators.required],
    })
  }

  onCategorySelected(){
    this.sizeIds = [];
    this.storeService.GetSizeByCategoryId(this.CategoryId).subscribe(
      (response)=>{
        this.sizes = response.data
      }
    )
  }


  onFileSelected(event){
    this.imageFile =<File> event.target.files[0];
    console.log(this.imageFile)
  }

  cancel() {
    this.ref.close();
  }
  submit() {
    let form:FormData = new FormData();
    form.append('id',this.garment.id.toString())
    form.append('name',this.addGarmentForm.value.Name)
    form.append('description',this.addGarmentForm.value.Description)
    form.append('brand',this.addGarmentForm.value.Brand)
    form.append('price',this.addGarmentForm.value.Price)
    form.append('categoryId',this.CategoryId.toString())
    this.addGarmentForm.value.Colors.forEach(element => {
      
      form.append('colors',element)
    });
    this.addGarmentForm.value.Properties.forEach(element => {
      
      form.append('properties',element)
    }); 
     this.sizes.forEach(element => {
      form.append('sizes',element.id.toString())
    });
    if(this.imageFile)
    {
      form.append('imagesFiles',this.imageFile,this.imageFile.name)
    }


   this.ref.close(form);
  }
}
