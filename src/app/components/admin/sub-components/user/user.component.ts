import { NbToastrService } from '@nebular/theme';
import { UserModel } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'ngx-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

 users : UserModel[];
  constructor(private adminService : AdminService, private tuster: NbToastrService) { }

  ngOnInit(): void {
     this.getUsers();
  }
  settings = {
     actions : {add:false, edit:false},
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {

      firstName: {
        title: "First Name",
        type: "string",
      },
      lastName: {
        title: "Last Name",
        type: "string",
      },
      email: {
        title: "Email",
        type: "number",
      },
      country: {
        title: "Country",
        type: "string",
      },
      city: {
        title: "City",
        type: "string",
      },
      street: {
        title: "Street",
        type: "string",
      },
      phoneNumber: {
        title: "Phone Number",
        type: "string",
      },
    },
  };
   getUsers(){
     this.adminService.GetAllUsers().subscribe((res)=>{
           if(res.success){
             this.users = res.data;
           }
     })
   }


   onDeleteConfirm(event){
    if (window.confirm("Are you sure you want to delete?")) {
     console.log(event);
     this.adminService.DeleteUser(event.data.id).subscribe((res)=>{
          if(res.success){
           this.tuster.success('user deleted successfully', 'Deleted', {duration:1500});
           event.confirm.resolve();
          }
     },
     (err)=>{
      this.tuster.danger('theere something erorr', 'Erorr', {duration:1500});
     })

   }
   else {
    event.confirm.reject();
  }
  }
}
