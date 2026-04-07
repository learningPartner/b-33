import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-departments',
  imports: [FormsModule],
  templateUrl: './departments.html',
  styleUrl: './departments.css',
})
export class Departments implements OnInit {


  http=  inject(HttpClient);

  parentDeptList = signal<any>([])

  childNewDept=  {
  "childDeptId": 0,
  "parentDeptId": 0,
  "departmentName": ""
}

  ngOnInit(): void {
    this.getAllParentDpet();
  }

  getAllParentDpet() {
    this.http.get("https://localhost:44340/api/EmployeeManagement/GetParentDepartment").subscribe({
      next:(res:any)=>{
        this.parentDeptList.set(res.data)
      }
    })
  }

  onSaveChildDept(){
    const formValu =  this.childNewDept;
    debugger;
  }
}
