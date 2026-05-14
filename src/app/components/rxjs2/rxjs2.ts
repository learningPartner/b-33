import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { concatMap, exhaustMap, forkJoin, from, mergeMap, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-rxjs2',
  imports: [],
  templateUrl: './rxjs2.html',
  styleUrl: './rxjs2.css',
})
export class Rxjs2 implements OnInit {



  http = inject(HttpClient);

  tiggerUserApi$: Subject<boolean> = new Subject<boolean>;

  ngOnInit(): void { 
    this.getAllUsers()
  }


  // getData() {
  //   const user$ = this.http.get("https://projectapi.gerasim.in/api/BankLoan/GetAllUsers");
  //   const application$ = this.http.get("https://projectapi.gerasim.in/api/BankLoan/GetAllApplications2");

  //   forkJoin([user$,application$]).subscribe({
  //     next:(res:any)=>{
  //        debugger;
  //     },
  //     error:(error:any)=>{
  //       debugger;
  //     }
  //   }) 
  // }

  getUsers() {
    const UserIdsArr = [2, 12, 6];
    from(UserIdsArr).pipe(
      mergeMap((id: number) => this.http.get("https://jsonplaceholder.typicode.com/users/" + id))
    ).subscribe((res: any) => {
      debugger;
    })

    // from(UserIdsArr).pipe(
    //   concatMap((id: number) => this.http.get("https://jsonplaceholder.typicode.com/users/" + id))
    // ).subscribe((res: any) => {
    //   debugger;
    // })

    from(UserIdsArr).pipe(
      exhaustMap((id: number) => this.http.get("https://jsonplaceholder.typicode.com/users/" + id))
    ).subscribe((res: any) => {
      debugger;
    })


    // for (let index = 0; index < UserIdsArr.length; index++) {
    //   this.http.get("https://jsonplaceholder.typicode.com/users/"+UserIdsArr[index] ).subscribe((res:any)=>{
    //     debugger;
    // })
    // }


  }


  userBtnClickEvent() {
    this.tiggerUserApi$.next(true);
  }
  getAllUsers() {
    // this.tiggerUserApi$.subscribe((res: boolean) => {
    //   this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any) => {
    //     console.log("getAllUsers Resonse FReceivced")
    //   })
    // })

    // this.tiggerUserApi$.pipe(
    //   switchMap(res=> this.http.get("https://jsonplaceholder.typicode.com/users"))
    // ).subscribe((res:any)=>{
    //   console.log("getAllUsers Resonse FReceivced")
    // })

     this.tiggerUserApi$.pipe(
      exhaustMap(res=> this.http.get("https://jsonplaceholder.typicode.com/users"))
    ).subscribe((res:any)=>{
      console.log("getAllUsers Resonse FReceivced")
    })

  }


}
