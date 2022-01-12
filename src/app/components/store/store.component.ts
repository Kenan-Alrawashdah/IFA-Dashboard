import { NbDialogService } from "@nebular/theme";
import { Component, OnInit, TemplateRef } from "@angular/core";
import { GetAllCategories } from "./module/get-all-categories.model";
import { GetStoreItem } from "./module/get-store-item.model";
import { StoreService } from "./services/store.service";

@Component({
  selector: "ngx-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.scss"],
})
export class StoreComponent implements OnInit {
  GetStoreItem: GetStoreItem[];
  GetAllCategories: GetAllCategories[];

  constructor(
    private dialogService: NbDialogService,
    private storeService: StoreService
  ) {}
  cat3 = [];
  cat = [
    {
      cat: "Frank",
      id: 1,
    },
    {
      cat: "Vic",
      id: 2,
    },
  ];
  cat1 = [
    {
      cat: "Frank",
      id: 1,
    },
    {
      cat: "Vic",
      id: 2,
    },
    {
      cat: "Vic",
      id: 2,
    },
    {
      cat: "Vic",
      id: 2,
    },
  ];
  cat2 = [
    {
      cat: "2ssdas",
      id: 3,
    },
    {
      cat: "asdasdas",
      id: 4,
    },
  ];
  ngOnInit(): void {
    this.storeService.GetAllCategories().subscribe((data) => {
      if (data.success) {
        this.GetAllCategories = data.data;
      }
    });
  }
  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      context: "this is some additional data passed to dialog",
    });
  }
  onEvento(e) {
    this.storeService
      .GetStoreItemByCategoryId(e.badgePosition)
      .subscribe((data) => {
        if (data.success) {
          this.GetStoreItem = data.data;
        }
      });
    if (e.badgePosition == 1) {
      this.cat3 = this.cat2;
    } else if (e.badgePosition == 2) {
      this.cat3 = this.cat1;
    } else {
      this.cat3 = this.cat3;
    }
  }
}
