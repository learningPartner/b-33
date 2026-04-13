import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [FormsModule, JsonPipe,RouterLink],
  templateUrl: './user.html',
  styleUrl: './user.css',
})

export class User implements OnInit{

  http = inject(HttpClient); //16

  userService = inject(UserService);

  router =  inject(Router);
   

  userList = signal<any>([]);
  
  newUserObj: any = {
    "userId": 0,
    "userName": "",
    "emailId": "",
    "fullName": "",
    "password": ""
  };

  constructor() { 
    const maskedCardNo =  this.userService.getMaskedCardNo("2323454567678765");
    const course =  this.userService.courseName; 
  }

  ngOnInit(): void {
    this.getUserListFromService();
  }

  onReset() {
    this.newUserObj = {
      "userId": 0,
      "userName": "",
      "emailId": "",
      "fullName": "",
      "password": ""
    };
  }

  onEdit(id: any) {
    debugger;
    //this.router.navigateByUrl('/userform/'+id)
    this.router.navigate(['/userform',id])
   // this.newUserObj = data;
  }

  getUsers() {
    debugger;
    this.http.get("https://api.freeprojectapi.com/api/BankLoan/GetAllUsers").subscribe((result: any) => {
      debugger;
      this.userList.set(result.data);
    },error=>{
      
    })
  }

  getUserListFromService() {
    this.userService.getAllUsersData().subscribe({
      next:(result:any)=>{
        this.userList.set(result.data)
      }
    })
  }
  
   onSaveUser(form: NgForm) {
    if(!form.invalid) {
       this.userService.saveUser(this.newUserObj).subscribe({
      next:(res)=>{
        this.getUsers();
      }
    })
    } else {
      alert("Provide Required form Details")
    }
   
  }

  getAllUsers() {
    this.http.get("https://api.freeprojectapi.com/api/BankLoan/GetAllUsers").subscribe({
      next:(result:any)=>{
        this.userList.set(result.data)
      },
      error:(error)=>{
        alert("API Eeror" + error)
      }
    })
  }

  // onSaveUser() {
  //   debugger;
  //   this.http.post("https://api.freeprojectapi.com/api/BankLoan/RegisterCustomer", this.newUserObj).subscribe(res => {
  //     debugger;
  //     this.getUsers();
  //   })
  // }

 

  onUpdateUser() {
    this.http.post("https://api.freeprojectapi.com/api/BankLoan/UpdateUser", this.newUserObj).subscribe(res => {
      debugger;
      this.getUsers();
    })
  }

  onDeleteUser(id: number) {
    debugger;
    const isDelete = confirm("Are you sure want to Delete");
    if (isDelete == true) {
      this.http.delete("https://api.freeprojectapi.com/api/BankLoan/DeleteUserByUserId?userId=" + id).subscribe(res => {
        this.getUsers();
      })
    }

  }


}
