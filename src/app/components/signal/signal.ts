import { Component, effect, signal, WritableSignal } from '@angular/core';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  courseName : string = "Anglar";
  currentRollNo: number = 12;
  isProduct = false;

  courseDuration = signal("3 Months");
  isBatchActive: WritableSignal<boolean> = signal(true);
  cityList = signal(["Pune","Nagpur","Mumbai"]);
  
  studentObj =  signal({
    name:'Rahul',
    city:'Pune',
    state: 'MH'
  })

  constructor(private user: UserService) {
    const coure =  this.user.courseName;
    const result = this.user.getSumOfTwoNum(3,5);
    debugger;
    setTimeout(() => { 
       this.courseName = "React.js";
       // write
    }, 3000);

    setTimeout(() => {
      this.courseDuration.set("5 month 2 weeks")
    }, 6000);
    
    effect(()=>{
      debugger;
      console.log(this.isBatchActive())
      const couserDurationFirstChar = this.courseDuration().charAt(0);
    })

     effect(()=>{
      debugger;
      const couserDurationFirstChar = this.courseDuration().charAt(0);
    })
  }

  addCity() {
    // const oldArray =  this.cityList();
    // oldArray.push("Thane");

    // setTimeout(() => {
    //      this.cityList.set(oldArray)
    // }, 2000);

    this.cityList.update(oldList =>  [...oldList,'Thane'])

    this.studentObj.update(oldObj=> ({...oldObj,name:'Anniket'}))
  }

  addMpCity() {
    this.cityList.set(["Bhopal","Indore","Chindwada"]);
    this.studentObj.set({name:'Omkar', city:'Mumbai',state:'MH'})
  }
  onDurationChnage() {
    this.courseName ="saddasd"
    //wrote code 
    debugger;
    const duration = this.courseDuration();
    this.courseDuration.set("2 Month and 1 Week")
  }

  setNewDurationChnage() {
    this.courseName ="saddasd"
    //wrote code 
    debugger;
    const duration = this.courseDuration();
    this.courseDuration.set("6 months")
  }


}
