import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  NbAuthService,
  NbAuthSocialLink,
  NbLoginComponent,
} from "@nebular/auth";

@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent extends NbLoginComponent {
  loginForm: FormGroup;
  rememberMe: boolean;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/),
      ]),
    });
  }

  login1(): void {
    console.log(this.loginForm.value);
  }

  getConfigValue1(key: string): any {}
}
