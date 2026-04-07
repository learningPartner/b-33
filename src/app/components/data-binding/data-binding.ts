import { DatePipe, JsonPipe, KeyValuePipe, LowerCasePipe, NgFor, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Alert } from "../../reusable/alert/alert";
import { ProgressBar } from "../../reusable/progress-bar/progress-bar";
import { Tabs } from "../../reusable/tabs/tabs";

const pipeImports = [
   LowerCasePipe,
     UpperCasePipe, TitleCasePipe, SlicePipe,
    DatePipe, JsonPipe, NgFor, KeyValuePipe
]

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule, pipeImports, Alert, ProgressBar, Tabs],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

  courseName :string = "Angular 21";
  couserDescription  = "this is angular  + fullstack course";
  courseDuration = "3 Months";

  myInputType = "checkbox";

  myClassName = "col-2 bg-danger";

  minChar = 4;
  maxCharAllowed = 6;
  selectedCity = "Mumbai";
  isActive: boolean = true;

  rollNoList = [11,13,14,15,16,17,18,29,20];
  //slice = 
  currenDate: Date = new Date();

  studentObj = {
    name:'Chetan',
    city:'Pune',
    state: 'MH',
    address: {
      pincode:'112233',
      city:'Mumbai'
    }
  }

  employeeObj = {
    name:'Chetan',
    city:'Pune',
    state: 'MH',
    mobile: '22334455',
    email:'chetan@gmaqil.com'
  }
  
  changeCourseName(name: string) {
    this.courseName =  name;
  }

  showWelcomeText() {
    alert("Welcome B-33 Batch")
  }

  showMessage(message: string) {
    debugger;
    alert(message)
  }

  onCityChanged() {
    alert("City Chnaged")
  }

  onMouseENterDiv() {
    console.log("Mounse Enetered Into Div")
  }

  onMouseLeftDiv() {
    console.log("Mounse Left  Div")
  }

  
}

