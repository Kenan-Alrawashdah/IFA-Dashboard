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


@NgModule({
  declarations: [
    TestComponent,
    CategoryComponent,
    GroupComponent,
    MulitSelectComponent,
    PropertyComponent ,
    GroupSelectComponent
    
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
    NbSelectModule
  ]
})
export class AdminModule { }
