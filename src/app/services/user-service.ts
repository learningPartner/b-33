import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class UserService {

  courseName: string = "Angular 21";
  //subject and behviourSub from rxjs
  http = inject(HttpClient);

  onSearchTextSubject: Subject<string> = new Subject<string>();

  onSearchBehviouSub : BehaviorSubject<string> = new BehaviorSubject<string>("");

  getMaskedCardNo(cardNo: string) {
    const starStr = "**** **** **** ";
    const lastFourDigit = cardNo.slice(-4);
    return starStr + lastFourDigit;
  }

  getSumOfTwoNum(num1: number, num2: number) {
    return num1 + num2;
  }

  getAllUsersData() {
    
    return this.http.get("https://api.freeprojectapi.com/api/BankLoan/GetAllUsers")
  }

  getCategory() { 
    return this.http.get("https://api.freeprojectapi.com/api/Enquiry/get-categories")
  }

  saveUser(obj: any) {
    return this.http.post("https://api.freeprojectapi.com/api/BankLoan/RegisterCustomer", obj)
  }

  onSaveCategory(obj: any) {
    return this.http.post("https://api.freeprojectapi.com/api/Enquiry/create-category", obj)
  }

  getAllApplictions() { 
    return this.http.get("https://api.freeprojectapi.com/api/BankLoan/GetAllApplications").pipe(
      map((result: any) => result.data)
    )
  }

  getAllApplictionsForDropdownOld() {
    
    return this.http.get("https://api.freeprojectapi.com/api/BankLoan/GetAllApplications").pipe(
      tap(respsone=>{
        
      }),
      map((result: any) => result.data),
      map((applIst: any[]) => applIst.map(item => ({ appId: item.applicantID, fullName: item.fullName})))
    )
  }

  getAllApplictionsForDropdown() {
    return this.http.get<any[]>('https://api.freeprojectapi.com/api/BankLoan/GetAllApplications').pipe(
      map((users:any) => users.data.map((user:any) => ({appId: user.applicantID , fullName: user.fullName})))
    );
  }




}
