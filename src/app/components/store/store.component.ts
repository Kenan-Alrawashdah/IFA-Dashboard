import { Component, OnInit, ChangeDetectionStrategy, TemplateRef } from "@angular/core";
import { NbTabsetModule } from "@nebular/theme";
import { NbDialogService } from "@nebular/theme";

@Component({
  selector: "ngx-store",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.scss"],
})
export class StoreComponent implements OnInit {
  constructor(private dialogService: NbDialogService) {}

  ngOnInit(): void {}
  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      context: "this is some additional data passed to dialog",
    });
  }
  
}
