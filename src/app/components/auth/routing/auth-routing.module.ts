import { TestComponent } from '../test/test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent, NbLogoutComponent, NbRequestPasswordComponent, NbResetPasswordComponent } from '@nebular/auth';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../Register/Register.component';

const routes: Routes = 
  [
    {
      path: '',
      component: LoginComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'register',
      component: RegisterComponent,
    },
    {
      path: 'logout',
      component: NbLogoutComponent,
    },
    {
      path: 'request-password',
      component: NbRequestPasswordComponent,
    },
    {
      path: 'reset-password',
      component: NbResetPasswordComponent,
    },
    // {
    //   path: 'test',
    //   component: TestComponent,
    // },
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
