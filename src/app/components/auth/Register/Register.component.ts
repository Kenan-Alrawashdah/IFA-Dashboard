import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {  NbRegisterComponent } from '@nebular/auth';
import { AddStore, Location } from '../models/addStore';

@Component({
  selector: 'ngx-test',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.scss']
})
export class RegisterComponent extends NbRegisterComponent  implements OnInit  {


  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  store : AddStore;


  ngOnInit() {
    this.firstForm =  new FormGroup({
      firstName:new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      password: new FormControl('',[Validators.required, Validators.pattern(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/)]),

    });

    this.secondForm =  new FormGroup({
      storeName: new FormControl('',[Validators.required]),
      phoneNumber: new FormControl('',[Validators.required]),
      username: new FormControl('',[Validators.required]),
    });
    this.thirdForm =  new FormGroup({
      country: new FormControl('',[Validators.required]),
      city: new FormControl('',[Validators.required]),
      street: new FormControl('',[Validators.required]),
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

    this.store = new AddStore();
    this.store.firstName = this.firstForm.get('firstName').value;
    this.store.lastName = this.firstForm.get('lastName').value;
    this.store.email = this.firstForm.get('email').value;
    this.store.password = this.firstForm.get('password').value;
    this.store.phoneNumber = this.secondForm.get('phoneNumber').value;
    this.store.username = this.secondForm.get('username').value;
    this.store.storeName = this.secondForm.get('storeName').value;
    this.store.locations = [new Location(this.thirdForm.get('country').value,this.thirdForm.get('city').value,this.thirdForm.get('street').value)];
    console.log(this.store);
    //this.thirdForm.markAsDirty();
     }

     checkEmail(){
        if(this.firstForm.get('email').value == null){

        }
     }






}