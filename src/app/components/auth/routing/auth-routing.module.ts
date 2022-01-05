import { TestComponent } from './../test/test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent } from '@nebular/auth';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'test',
        component: TestComponent,
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
