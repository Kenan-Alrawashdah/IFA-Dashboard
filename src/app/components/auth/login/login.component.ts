import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbAuthSocialLink, NbLoginComponent } from '@nebular/auth';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends NbLoginComponent {
  protected service: NbAuthService;
  protected options: {};
  protected cd: ChangeDetectorRef;
  protected router: Router;
  redirectDelay: number;
  showMessages: any;
  strategy: string;
  errors: string[];
  messages: string[];
  user: any;
  submitted: boolean;
  socialLinks: NbAuthSocialLink[];
  rememberMe: boolean;

  login1(): void {

  }
  getConfigValue1(key: string): any{

  };
  // static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbLoginComponent, never>;
  // static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NbLoginComponent, "nb-login", never, {}, {}, never, never>;
  



}
