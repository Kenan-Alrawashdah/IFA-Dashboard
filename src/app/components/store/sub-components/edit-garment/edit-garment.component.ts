import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Constants } from '../../../../constants/constants';
import { CategoryModel } from '../../../admin/models/category.model';
import { PropertyModel } from '../../../admin/models/property.model';
import { ColorModel } from '../../module/color.model';
import { GroupModel } from '../../module/GroupWithProperty.model';
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

  Garment:Garment;

  loading:boolean = false; 
  imageFile : File = null ;
  addGarmentForm:FormGroup;
  categories:CategoryModel[];
  colors:ColorModel[];
  sizes: SizeModel[] = [];
  Groups:GroupModel [];
  url:any ; 
  sizeIds:number[]= [];
  CategoryId:number =0;
  propertyValidation:boolean = false;
  sizesValidation:boolean = false;
  categoryValidation:boolean = false;
   flag = true;
  constructor(
    protected ref: NbDialogRef<AddGarmentsComponent>,
    public fb: FormBuilder,
    private storeService:StoreService)
   {
     this.Garment = this.storeService.garment;
      this.url =Constants.BaseURL +'Images/' + this.Garment.images[0]
     this.CategoryId = this.Garment.categoryId; 
     this.onCategorySelected();
     this.sizeIds = this.Garment.sizesOfId; 
    this.categories = storeService.categories;
    this.colors = storeService.colors;
    this.addGarmentForm = this.fb.group({
      Name: [this.Garment.name,Validators.required],
      Description: [this.Garment.description,Validators.required],
      Brand: [this.Garment.brand,Validators.required],
      Price: [this.Garment.price,Validators.required],
      Colors: [this.Garment.colorsOfId,Validators.required]
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
        if(this.flag)
        {
          this.Garment.properties.forEach(element => {
            this.Groups.filter(g=>{ return g.propertysInsidGroup.filter(p=>p.id == element).length > 0 })[0].Property = element;
           });
        }
       
        this.flag = false ;
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
  }

  cancel() {
    this.ref.close();
  }
  submit() {
    this.addGarmentForm
    if(this.CategoryId == 0 )
    {
      this.categoryValidation = true;
    }else{
    
      if(this.sizeIds.length == 0 )
      {
        this.sizesValidation = true ; 
      }else{

    let form:FormData = new FormData();
    this.Groups.forEach(element => {
      if(element.Property != null )
      {
        form.append('properties',element.Property.toString())
      }
    });
    if(form.get('properties') == null)
    {
      this.propertyValidation = true;
    }else{
      form.append('id',this.Garment.id.toString())
      form.append('name',this.addGarmentForm.value.Name)
      form.append('description',this.addGarmentForm.value.Description)
      form.append('brand',this.addGarmentForm.value.Brand)
      form.append('price',this.addGarmentForm.value.Price)
      form.append('categoryId',this.CategoryId.toString())
      this.addGarmentForm.value.Colors.forEach(element => {
        
        form.append('colors',element)
      });
  
       this.sizeIds.forEach(element => {
        form.append('sizes',element.toString())
      });
  
    if(this.imageFile != null)
    {
      form.append('imagesFiles',this.imageFile,this.imageFile.name)
    }
     this.ref.close(form);

    }



  }
  }
}

}
