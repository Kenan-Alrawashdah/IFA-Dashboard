import { NbDialogService } from '@nebular/theme';
import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'ngx-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
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
