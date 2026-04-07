import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-for-loop',
  imports: [NgFor, FormsModule, NgIf],
  templateUrl: './ng-for-loop.html',
  styleUrl: './ng-for-loop.css',
})
export class NgForLoop {

  cityList: string[] = ['Jaipur', 'Nagpur', 'Mumbai', 'Pune']
  studentList = [
    {studId:123,isActive: true, email:'chetan@gmail.com',state:'MH', name: 'chetan', city: 'Pune' },
    {studId:124,isActive: true, email:'Rahul@gmail.com',state:'MH', name: 'Rahul', city: 'Jaipur' },
    {studId:125,isActive: false, email:'Tanmay@gmail.com',state:'MH', name: 'Tanmay', city: 'Mumbai' },
    {studId:126,isActive: true, email:'Sahil@gmail.com',state:'Rajsthan', name: 'Sahil', city: 'Udiapur' },
    {studId:127,isActive: false, email:'Jagan@gmail.com',state:'MH', name: 'Jagan', city: 'Hingna' },
    {studId:128,isActive: true, email:'Sachin@gmail.com',state:'Rajsthan', name: 'Sachin', city: 'Jaipur' },
    {studId:129,isActive: true, email:'punam@gmail.com',state:'Goa', name: 'punam', city: 'Panji' },
  ]
}
