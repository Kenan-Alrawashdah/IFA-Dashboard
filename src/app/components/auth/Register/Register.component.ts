import { Component, OnInit, Injectable } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { NbRegisterComponent } from "@nebular/auth";
import { NbToastrService } from "@nebular/theme";
import { AuthService } from "../../../services/auth.service";
import { AddStoreModel, Location } from "../models/addStore.model";

@Component({
  selector: "ngx-test",
  templateUrl: "./Register.component.html",
  styleUrls: ["./Register.component.scss"],
})
export class RegisterComponent extends NbRegisterComponent implements OnInit {
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  store: AddStoreModel;
  loading: boolean = false;
  stepperIndex: number = 0;
  hedin: boolean = true;

  constructor(
    private authService:AuthService ,
    private toastr:NbToastrService
  ){
    super(null,{},null,null)
  }

  ngOnInit() {
    this.firstForm = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/),
      ]),
    });

    this.secondForm = new FormGroup({
      storeName: new FormControl("", [Validators.required]),
     
      username: new FormControl("", [Validators.required]),
    });
    this.thirdForm = new FormGroup({
      country: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      phoneNumber: new FormControl("", [Validators.required]),
      street: new FormControl("", [Validators.required]),
    });
  }

  onFirstSubmit() {
    console.log("kenan11");
    console.log(this.firstForm.value);

    //this.firstForm.markAsDirty();
  }
  onSecondSubmit() {
    // this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.loading = true;
    this.store = new AddStoreModel();
    this.store.firstName = this.firstForm.get("firstName").value;
    this.store.lastName = this.firstForm.get("lastName").value;
    this.store.email = this.firstForm.get("email").value;
    this.store.password = this.firstForm.get("password").value;
    this.store.username = this.secondForm.get("username").value;
    this.store.storeName = this.secondForm.get("storeName").value;
    this.store.locations = [
      new Location(
        this.thirdForm.get("country").value,
        this.thirdForm.get("city").value,
        this.thirdForm.get("street").value,
        this.thirdForm.get("phoneNumber").value
      ),
    ];
    console.log(this.store)
    this.authService.register(this.store).subscribe(
      (response)=>{
        this.hedin = false;
        this.stepperIndex = 3;
        this.loading = false;
      },
      (errorResponse)=>{
        console.log(errorResponse);
        this.loading = false;
      }
   
    )
    console.log(this.store);
    

  }

  checkEmail() {
    this.loading = true;
    this.authService.checkEmail(this.firstForm.get("email").value).subscribe(
      (response)=>{
      
          this.loading = false;
          this.stepperIndex = 1;
      
      },
      (errorResponse)=>{
        this.loading = false;
        this.toastr.warning('The email is already taken please try another one ', 'Warning',{duration:2000});
      }
    )
  }
  next() {
    this.stepperIndex = 2;
  }
  previous() {
    this.stepperIndex -= 1;
  }
}
