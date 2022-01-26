import { UserComponent } from './../sub-components/user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyComponent } from '../property/property.component';
import { CategoryComponent } from '../sub-components/category/category.component';
import { GroupComponent } from '../sub-components/group/group.component';
import { PendingStoresComponent } from '../sub-components/pending-stores/pending-stores.component';
import { StoresComponent } from '../sub-components/stores/stores.component';
import { TestComponent } from '../sub-components/test/test.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'test',
    pathMatch:'full'
  },
  {
    path:'categories',
    component:CategoryComponent
  },
  {
    path:'groups',
    component:GroupComponent
  },
  {
    path:'property',
    component:PropertyComponent
  },
  {
    path:'PendingStores',
    component:PendingStoresComponent
  },
  {
    path:'Stores',
    component:StoresComponent
  },
  {
    path:'test',
    component:TestComponent
  },
  {
    path:'Users',
    component:UserComponent
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
