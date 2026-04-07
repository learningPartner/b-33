import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [DatePipe],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetAPI {

  //httpClinet librarry
  //fetch
  //depedency injection

  userList: any [] = [];
  photosList: any [] = [];
  enrollmentList: any []= [];

  constructor(private http: HttpClient) {
   const value = this.getSum(3)
  }


  getAllUsers() {
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((response:any)=>{
      debugger;
      this.userList =  response;
    })
  }

  getAllPhots() {
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe((res:any)=>{
      this.photosList = res;
    })
  }

  getAllEnrollments() {
    debugger;
    this.http.get("https://feestracking.freeprojectapi.com/api/BatchEnrollments/GetAllEnrollment").subscribe((res:any)=>{
      debugger;
      this.enrollmentList = res.data;
    })
  }

  getSum(num: number) {
    return  num + num;
  }


}
