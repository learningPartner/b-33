import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { User } from "../user/user";
import { NgClass, NgFor, NgIf, NgSwitchDefault, NgTemplateOutlet } from '@angular/common';
import { single } from 'rxjs';

@Component({
  selector: 'app-admin',
  imports: [RouterLink, User, NgFor, NgIf, NgTemplateOutlet,NgClass],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})

export class Admin implements OnInit, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy, DoCheck {

  router2 = inject(Router); //16
  studentList = signal<any>([
    { studId: 123, isActive: true, attendancePeer: 90, email: 'chetan@gmail.com', state: 'MH', name: 'chetan', city: 'Pune' },
    { studId: 124, isActive: true, attendancePeer: 50, email: 'Rahul@gmail.com', state: 'MH', name: 'Rahul', city: 'Jaipur' },
    { studId: 125, isActive: false, attendancePeer: 20, email: 'Tanmay@gmail.com', state: 'MH', name: 'Tanmay', city: 'Mumbai' },
    { studId: 126, isActive: true, attendancePeer: 10, email: 'Sahil@gmail.com', state: 'Rajsthan', name: 'Sahil', city: 'Udiapur' },
    { studId: 127, isActive: false, attendancePeer: 40, email: 'Jagan@gmail.com', state: 'MH', name: 'Jagan', city: 'Hingna' },
    { studId: 128, isActive: true, attendancePeer: 60, email: 'Sachin@gmail.com', state: 'Rajsthan', name: 'Sachin', city: 'Jaipur' },
    { studId: 129, isActive: true, attendancePeer: 97, email: 'punam@gmail.com', state: 'Goa', name: 'punam', city: 'Panji' },
  ])
  isApiInPogress = signal<boolean>(true);
  constructor(private router: Router) {
    console.log("constructor")
    setTimeout(() => {
      this.isApiInPogress.set(false);
      this.studentList.set([]);
      debugger;
    }, 5000)
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }

  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }


}
