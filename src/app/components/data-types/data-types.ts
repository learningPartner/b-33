import { Component } from '@angular/core';

@Component({
  selector: 'app-data-types',
  imports: [],
  templateUrl: './data-types.html',
  styleUrl: './data-types.css',
})
export class DataTypes {

  //initization
  courseName = "Angular";
  rollNo = 123;
  isActive = true;
  currentDate = new Date();

  //declaation + datatype +  intialization
  productName: string = "Mobile";
  isProductAaial: boolean = false;
  //declaration only
  productPrice: number;

  student: any;

  employee = null;
  product = undefined;
  isnum = NaN;

  studentDetail: any = {
    name: 'Chetan',
    city: 'Pune',
    state: 'MH'
  };

  cityList: string[] = ["Pune", "Nagpur", 'Jaipur'];
  rollNoArray: number[] = [11, 12, 13, 14, 15]


  constructor() {
    this.student = "ABC";
    this.student = true;
    this.student = {};
    this.student = [];
    this.productPrice = 222;
    this.courseName = "Reatcjs";

    let rollNoArray = ['', '']
    const studName = "Some";
    //this.courseName = 333;
    console.log(rollNoArray)
    console.log(studName)

    console.log(this.courseName);
    this.printCourseName()
    this.printText('123')
    this.printText("this is sample text")
    const value =  this.addTwoNum(2,5);
    alert("Addit0on "+ value)
    const value2  = this.addTwoNum(4);
    this.addNumbers(1,2)
  }

  printCourseName() {
    console.log("this is from Function "+ this.courseName);
  }

  printText(message: string) {
    debugger;
    alert(message)
  }

  addTwoNum(num1: number, num2: number =0) {
    return num1+ num2;
  }

  addNumbers(num1: number, num2: number, num3?: number) {
    let num =12;
    if(num3 != undefined) {
      return num1 + num2 + num3;
    } else {
      return num1 + num2;
    }
  }





}
