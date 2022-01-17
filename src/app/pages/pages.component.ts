import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token.service';

import { Admin, Store } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent  {
  menu :any ;
  role :string|null ; 
  constructor(
    private tokenService:TokenStorageService,
    private router :Router
  ){
    this.role = this.tokenService.GetRole()
    if(this.role == '' || this.role == null)
    {
      this.router.navigate(['/auth'])
    }else if(this.role == 'ShopOwner' )
    {
      this.menu = Store
    }else if(this.role == 'Admin' )
    {
      this.menu = Admin
    }
  }





}
