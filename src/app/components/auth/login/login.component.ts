import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  NbAuthService,
  NbAuthSocialLink,
  NbLoginComponent,
} from "@nebular/auth";
import { AuthService } from "../../../services/auth.service";
import { HttpClient } from "@angular/common/http";
import { TokenStorageService } from "../../../services/token.service";

@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent extends NbLoginComponent {
  loginForm: FormGroup;
  rememberMe: boolean;

 constructor(
   private authService:AuthService,
   private tokenService:TokenStorageService
 ){
   super(null,null,null,null)
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
    this.authService.login(this.loginForm.value.email,this.loginForm.value.password).
    subscribe(
      (response)=>{
        this.tokenService.saveToken(response.data)
        console.log(this.tokenService.getToken())
        console.log(this.tokenService.getUser())
      },
      (errorResponse)=>{
        console.log(errorResponse.error.errors[0])

      }
    )
    //console.log(this.loginForm.value);
  }

  getConfigValue1(key: string): any {}
}
