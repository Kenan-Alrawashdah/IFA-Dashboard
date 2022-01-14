import { NbDialogService } from "@nebular/theme";
import { Component, OnInit, TemplateRef } from "@angular/core";
import { StoreService } from "./services/store.service";
import { Garment, TabModel } from "./module/tabs.model";
import { AdminService } from "../admin/services/admin.service";

@Component({
  selector: "ngx-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.scss"],
})
export class StoreComponent implements OnInit {

  testTab:TabModel[] 
  
  constructor(
    private dialogService: NbDialogService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.storeService.GetAllCategories().subscribe(
      (response) => {
       this.testTab = response
      }
    );
  }
  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      context: "this is some additional data passed to dialog",
    });
  }
  onEvento(e) {
    let x =this.testTab.filter(t=>t.id == e.badgePosition)[0]
    if(typeof x.garments  == 'undefined')
    {
      this.storeService.GetStoreItemByCategoryId(e.badgePosition).subscribe(
        (response)=>{
          x.garments = response.data;
        }
      )
    }
  
  
  }
}
