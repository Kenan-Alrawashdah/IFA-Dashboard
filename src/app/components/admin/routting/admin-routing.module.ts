import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from '../sub-components/category/category.component';
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
    path:'test',
    component:TestComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
