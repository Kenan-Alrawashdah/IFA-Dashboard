import { NbDialogService } from "@nebular/theme";
import { Component, OnInit, TemplateRef } from "@angular/core";
import { StoreService } from "./services/store.service";
import { Garment, TabModel } from "./module/tabs.model";
import { AdminService } from "../admin/services/admin.service";
import { AddGarmentsComponent } from "./sub-components/add-garments/add-garments.component";
import { CategoryModel } from "../admin/models/category.model";
import { PropertyModel } from "../admin/models/property.model";
import { ColorModel } from "./module/color.model";
import { SizeModel } from "./module/size.model";
import { Constants } from "../../Constants/constants";
import { EditGarmentComponent } from "./sub-components/edit-garment/edit-garment.component";

@Component({
  selector: "ngx-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.scss"],
})
export class StoreComponent implements OnInit {

  imageHost:string =  Constants.BaseURL +'Images/'  ;

  testTab: TabModel[];
  categories: CategoryModel[];
//  properties: PropertyModel[];
  colors: ColorModel[];

  constructor(
    private dialogService: NbDialogService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    //Get categories
    this.storeService.GetAllCategories().subscribe((response) => {
      this.categories = response.data;
    });
    // Get properties
    // this.storeService.GetAllProperties().subscribe((response) => {
    //   this.properties = response.data;
    // });
    //Get colors
    this.storeService.GetAllColors().subscribe((response) => {
      this.colors = response.data;
    });
    // Get Tabs Names
    this.storeService.GatTabs().subscribe((response) => {
      this.testTab = response.data;
      this.firstOne();
    });
  }

  openAdd() {
    this.storeService.categories = this.categories;
    //this.storeService.properties = this.properties;
    this.storeService.colors = this.colors;

    this.dialogService
      .open(AddGarmentsComponent)
      .onClose.subscribe((response) => {
        if(response != null)
        {
          this.storeService.AddGarment(response).subscribe(
            (response) => {
              console.log(response);
              this.testTab.find(t=>t.id == response.data.categoryId).garments.push(response.data)
            },
            (errorResponse) => {
              console.log(errorResponse);
            }
          );
        }
      
      });
  }
  openEdit(garment:Garment) {
    this.storeService.categories = this.categories;
//    this.storeService.properties = this.properties;
    this.storeService.colors = this.colors;
    this.storeService.garment = garment

    this.dialogService
      .open(EditGarmentComponent)
      .onClose.subscribe((response) => {
        if(response != null)
        {
          this.storeService.EditGarment(response).subscribe(
            (response) => {
              console.log(response);
              // this.testTab.find(t=>{return t.garments.filter((g,index)=>g.id == response.data.id).length > 0}).garments.splice(index,1)
              // this.testTab.find(t=>t.id == response.data.categoryId).garments.push(response.data)
              this.ngOnInit();
            },
            (errorResponse) => {
              console.log(errorResponse);
            }
          );
        }
      
      });
  }

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      context: "this is some additional data passed to dialog",
    });
  }
  onEvenTo(e) {
    let x = this.testTab.filter((t) => t.id == e.badgePosition)[0];
    if (typeof x.garments == "undefined") {
      this.storeService
        .GetStoreItemByCategoryId(e.badgePosition)
        .subscribe((response) => {
          x.garments = response.data;
        });
    }
  }
  //Load the first tab garments
  firstOne() {
    let x = this.testTab[0];
    this.storeService.GetStoreItemByCategoryId(x.id).subscribe((response) => {
      x.garments = response.data;
      console.log(x.garments);
    });
  }
}
