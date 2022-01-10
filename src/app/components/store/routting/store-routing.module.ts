import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from '../store.component';
import { ProfileComponent } from '../sub-components/profile/profile.component';

const routes: Routes = [
  {
    path:'',
    component:StoreComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
