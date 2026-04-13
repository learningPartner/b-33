import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { from, interval, Observable, of, Subject } from 'rxjs';
import { UserService } from '../../services/user-service';
import { ViewChildEx } from "../view-child-ex/view-child-ex";

@Component({
  selector: 'app-rxjs-ex',
  imports: [ViewChildEx],
  templateUrl: './rxjs-ex.html',
  styleUrl: './rxjs-ex.css',
})
export class RxjsEx {

  http = inject(HttpClient)
  cityList = ['Maumbai', 'Pune'];

  $stateList = of(["Maha", "Goa", "Punjab"]);
  studentObj = of({ name: 'chetan', city: 'Pune', email: 'chetan@gmail.com' })

  $rollNoList = from([11, 12, 13, 14, 15]);

  $myInterval = interval(2000);

  currentRollNo: number = 122;

  $mySubject = new Subject<string>();

  userSrv = inject(UserService);

  isViewChildVisiable: boolean = false;


  showViewChild() {
    this.isViewChildVisiable =  true
  }
  constructor() {

    this.userSrv.onSearchTextSubject.subscribe((res:string)=>{
      debugger;
    })
    this.userSrv.onSearchBehviouSub.subscribe((res:string)=>{
      debugger;
    })

    this.getBanklOanApp();
    const myPromise = new Promise((Resolve, reject) => {
      Resolve("Error from promise")
    });
    myPromise.then((res: any) => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })

    const newPromiseObj =  of(myPromise);

    newPromiseObj.subscribe((res)=>{
      debugger
    })

    const myObs = new Observable<string>((obs) => {
      obs.next("Obserable Success")
    });
    myObs.subscribe(res => {
      console.log(res)
    })
    this.currentRollNo = 451;
    //wrote

    this.$stateList.subscribe((res: string[]) => {
      //
    })
    this.studentObj.subscribe(res => {
      // 
    })
    this.$rollNoList.subscribe(res => {
      //
    })

    this.$myInterval.subscribe(res => {

      if (res > 4) {

      }
    })


   





    this.$mySubject.next("Aniket");

    this.readSub();
  }

  getBanklOanApp(){
    this.userSrv.getAllApplictions().subscribe({
      next:(res)=>{
        
      }
    })
    this.userSrv.getAllApplictionsForDropdownOld().subscribe({
      next:(res)=>{
        
      }
    })
  }

  readSub() {
    this.$mySubject.subscribe(res => { 
    })
  }

  changeRollNo() {
    this.currentRollNo = 321;
    //write 
  }

  changeSub() {
    this.$mySubject.next("Chetan")
  }

  chnageSubjectName() {
    this.$mySubject.next("Rahul")
  }



}
