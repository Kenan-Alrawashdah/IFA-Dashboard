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
  error: string;
  errorValidation:boolean; 
 loading :boolean;

 constructor(
   private authService:AuthService,
   private tokenService:TokenStorageService,
   private router2:Router
 ){
   super(null,null,null,null)
 }



  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        // Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),S
      ]),
      password: new FormControl("", [
        Validators.required
      ]),
    });
  }

  login1(): void {
    this.loading = true;
    this.authService.login(this.loginForm.value.email,this.loginForm.value.password).
    subscribe(
      (response)=>{
        this.tokenService.saveToken(response.data)
        let role = this.tokenService.GetRole()
        if(role == 'ShopOwner')
        {
          this.router2.navigate(['/pages/Store'])
        }else if(role == 'Admin')
        {
          this.router2.navigate(['/pages/Admin/categories'])
        }else 
        {
          this.tokenService.signOut();
        }
      },
      (errorResponse)=>{
        this.error=errorResponse.error.errors[0]
        this.loading = false;
        this.errorValidation = true;
      }
    )
    //console.log(this.loginForm.value);
  }

  getConfigValue1(key: string): any {}
}
