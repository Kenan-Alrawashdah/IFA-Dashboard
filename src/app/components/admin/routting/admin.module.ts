import { UserComponent } from './../sub-components/user/user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TestComponent } from '../sub-components/test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbUserModule, NbButtonModule, NbTabsetModule, NbActionsModule, NbRadioModule, NbSelectModule, NbListModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { ThemeModule } from '../../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CategoryComponent } from '../sub-components/category/category.component';
import { GroupComponent } from '../sub-components/group/group.component';
import { MulitSelectComponent } from '../sub-components/group/mulit-select/mulit-select.component';
import { PropertyComponent } from '../property/property.component';
import { GroupSelectComponent } from '../property/group-select/group-select.component';
import { AdminComponent } from '../admin.component';
import { PendingStoresComponent } from '../sub-components/pending-stores/pending-stores.component';
import { StoresComponent } from '../sub-components/stores/stores.component';


@NgModule({
  declarations: [
    AdminComponent,
    TestComponent,
    CategoryComponent,
    GroupComponent,
    MulitSelectComponent,
    PropertyComponent ,
    GroupSelectComponent,
    PendingStoresComponent,
    StoresComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    NbSelectModule,

  ]
})
export class AdminModule { }
