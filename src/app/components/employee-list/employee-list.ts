import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { EmployeeModel, IEmployeeList } from '../../models/Employee.Model';
import { Employee } from '../../services/employee';
import { SlicePipe } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  imports: [SlicePipe, FormsModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit {

  newEmployeeObj: EmployeeModel = new EmployeeModel();
  //employeeList: IEmployeeList [] = [];
  employeeList: WritableSignal<IEmployeeList[]> = signal<IEmployeeList[]>([])
  errorText: string = '';


  employeSrv = inject(Employee);


  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.employeSrv.getAllEmployee().subscribe((res: IEmployeeList[]) => {
      this.employeeList.set(res)
    },error=>{
      
    })
  }

  onSaveEmployee() {
    this.employeSrv.saveEmployee(this.newEmployeeObj).subscribe({
      next: (res: EmployeeModel) => {
        debugger;
        alert("EMployee Saved Success")
        this.patchNewObjToArrat(res)
      },
      error: (err: any) => {
        const errObj = err.error.errors;
        this.errorText = '';
        this.errorText = this.generateErrorText(errObj)
        alert("API Error " + this.errorText)
      }
    })
  }

  patchNewObjToArrat(res: EmployeeModel) {
    const savedEmp = {
      city: res.city,
      email: res.email,
      employeeId: res.employeeId,
      fullName: res.firstName + " " + res.middleName + " " + res.lastName,
      isOnProject: res.isOnProject,
      mobileNo: res.middleName,
      projectName: res.projectName,
      state: res.state
    } as IEmployeeList;
    this.employeeList.update(res => [...res, savedEmp]);
  }

  generateErrorText(errObj: any) {
    let errorText = ""
    for (const key in errObj) {
      if (key !== 'status' && key !== 'title' && key !== 'traceId ' && key !== 'type') {
        if (errorText == '') {
          errorText = key + errObj[key]
        } else {
          errorText = errorText + " , " + key + errObj[key]
        }
      }
    }
    return errorText;
  }

  //  onSaveEmployee(form: NgForm) {
  //     if(form.valid) {

  //     }
  // }


}
