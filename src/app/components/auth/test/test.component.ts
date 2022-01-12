import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbRegisterComponent } from '@nebular/auth';

@Component({
  selector: 'ngx-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent extends NbRegisterComponent implements OnInit {


  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  fb: FormBuilder = new FormBuilder(); 


  ngOnInit() {
    this.firstForm = this.fb.group({
      firstCtrl: [''],
    });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }

}
