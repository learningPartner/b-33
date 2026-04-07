import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, inject, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { User } from "../user/user";

@Component({
  selector: 'app-admin',
  imports: [RouterLink, User],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})

export class Admin implements OnInit,AfterContentChecked,AfterContentInit,AfterViewInit, AfterViewChecked,OnDestroy , DoCheck {

  router2 = inject(Router); //16

  constructor(private router: Router) {
     console.log("constructor")
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
