import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyComponent } from '../property/property.component';
import { CategoryComponent } from '../sub-components/category/category.component';
import { GroupComponent } from '../sub-components/group/group.component';
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
  // {
  //   path:'add-group',
  //   component:GroupAddComponent
  // },
  {
    path:'test',
    component:TestComponent
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
