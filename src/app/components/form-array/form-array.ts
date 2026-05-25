import { NgFor } from '@angular/common';
import { Component, inject, signal, Signal } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './form-array.html',
  styleUrl: './form-array.css',
})
export class FormArrayExample {

  employeeForm!: FormGroup;
  formBuilder = inject(FormBuilder);
  empArray = signal<any[]>([]);

  constructor() {
    debugger;
    const localData = localStorage.getItem('formArry');
    if (localData != null) {
      this.empArray.set(JSON.parse(localData));
    }
    this.employeeForm = this.formBuilder.group({
      empName: [''],
      mobile: [''],
      city: [''],
      state: [''],
      projects: this.formBuilder.array([])
    })

    // const arry = this.employeeForm.get('projects') as FormArray;
    // arry.push(this.createProjectForm())

    //this.projectFormControlArray.push(this.createProjectForm());

    this.addProjectForm();
  }

  get projectFormControlArray(): FormArray {
    return this.employeeForm.get('projects') as FormArray;
  }

  addProjectForm() {
    this.projectFormControlArray.push(this.createProjectForm());
  }

  createProjectForm(): FormGroup {
    return this.formBuilder.group({
      projectName: [''],
      leadName: [''],
      technology: ['']
    })
  }

  appendProjectForm(obj: any): FormGroup {
    return this.formBuilder.group({
      projectName: [obj.projectName],
      leadName: [obj.leadName],
      technology: [obj.technology]
    })
  }

  onRemove(index: number) {
    this.projectFormControlArray.removeAt(index)
  }

  onSaveEmployee() {
    const formValue = this.employeeForm.value;
    debugger;
    this.empArray.update(old => [...old, formValue]);
    localStorage.setItem('formArry', JSON.stringify(this.empArray()))
  }

  onEdit(item: any) {
    debugger;
    this.employeeForm.reset();
    this.onRemove(0);

    const obj = {
      empName: item.empName,
      mobile: item.mobile,
      city: item.city,
      state: item.state
    }
    
    this.employeeForm.patchValue(obj);
    
    for (let index = 0; index < item.projects.length; index++) {
       this.projectFormControlArray.push(this.appendProjectForm(item.projects[index]))
    }

  }

}
