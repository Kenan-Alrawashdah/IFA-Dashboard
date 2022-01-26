import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Profile } from '../../module/profile';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'ngx-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent  {

  EditProfileForm:FormGroup; 
  profile:Profile;


  constructor(
    protected ref: NbDialogRef<EditProfileComponent>,
    private storeService: StoreService
  ) { 
    this.profile =  storeService.profileInfo;
    this.EditProfileForm = new FormGroup({
      storeName: new FormControl(this.profile.storeName,[Validators.required]),
      firstName: new FormControl(this.profile.firstName,[Validators.required]),
      lastName: new FormControl(this.profile.lastName,[Validators.required])
    })
  }

  cancel() {
    this.ref.close();
  }
  submit() {
     this.ref.close(this.EditProfileForm.value);
  }

}
