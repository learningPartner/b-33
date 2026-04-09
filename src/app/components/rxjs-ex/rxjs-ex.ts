import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { from, interval, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-rxjs-ex',
  imports: [],
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


  constructor() {
    const myPromise = new Promise((Resolve, reject) => {
      reject("Error from promise")
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
      //debugger;
    })
    this.studentObj.subscribe(res => {
      // debugger;
    })
    this.$rollNoList.subscribe(res => {
      //debugger;
    })

    this.$myInterval.subscribe(res => {

      if (res > 4) {

      }
    })


   





    this.$mySubject.next("Aniket");

    this.readSub();
  }

  readSub() {
    this.$mySubject.subscribe(res => {
      debugger;
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
