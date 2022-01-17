import { StoreComponent } from './../store.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbUserModule, NbButtonModule, NbTabsetModule, NbActionsModule, NbRadioModule, NbSelectModule, NbListModule, NbIconModule, NbSpinnerModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../../@theme/theme.module';
import { ProfileComponent } from '../sub-components/profile/profile.component';
import { AddGarmentsComponent } from '../sub-components/add-garments/add-garments.component';
import { EditGarmentComponent } from '../sub-components/edit-garment/edit-garment.component';


@NgModule({
  declarations: [
    StoreComponent,
    ProfileComponent,
    AddGarmentsComponent,
    EditGarmentComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    NbSpinnerModule
  ]
})
export class StoreModule { }
