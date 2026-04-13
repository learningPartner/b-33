import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user-service';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-form',
  imports: [FormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  http = inject(HttpClient); //16

  userService = inject(UserService);
  newUserObj: any = {
    "userId": 0,
    "userName": "",
    "emailId": "",
    "fullName": "",
    "password": ""
  };

  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.activatedRoute.params.subscribe({
      next:(param:any)=>{
        debugger;
      }
    })
  }

  onSaveUser(form: NgForm) {
    if (!form.invalid) {
      this.userService.saveUser(this.newUserObj).subscribe({
        next: (res) => { 
        }
      })
    } else {
      alert("Provide Required form Details")
    }

  }

   onUpdateUser() {
    this.http.post("https://api.freeprojectapi.com/api/BankLoan/UpdateUser", this.newUserObj).subscribe(res => {
      debugger;
      
    })
  }


}
