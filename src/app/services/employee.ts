import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel, IEmployeeList } from '../models/Employee.Model';

@Injectable({
  providedIn: 'root',
})
export class Employee {

  apiUrl: string = 'https://localhost:44327/api/EmployeeTest';

  http =  inject(HttpClient)

  getAllEmployee() :Observable<IEmployeeList[]>{
    return this.http.get<IEmployeeList[]>(this.apiUrl);
  }

  saveEmployee(obj: EmployeeModel) :Observable<EmployeeModel>{
    return this.http.post<EmployeeModel>(this.apiUrl,obj);
  }

}
