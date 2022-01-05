import { TestComponent } from '../test/test.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from '../login/login.component';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule, NbStepperModule, NbCardModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbAuthModule } from '@nebular/auth';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from '../Register/Register.component';


@NgModule({
  declarations: [
    LoginComponent,
    TestComponent,
    RegisterComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbAuthModule,
    NbStepperModule,
    ReactiveFormsModule,
    NbCardModule
    //BrowserModule
  ]
})
export class AuthModule { }
