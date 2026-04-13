import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-adv',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reactive-form-adv.html',
  styleUrl: './reactive-form-adv.css',
})
export class ReactiveFormAdv {

  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    // this.userForm = new FormGroup({
    //   name: new FormControl("",[Validators.required]),
    //   email: new FormControl("",[Validators.email, Validators.required])
    // })

    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      city: [''],
      isDocumentNeeded: [false],
      documentName: [''],
      documentNo: ['']
    })

    this.userForm.controls['documentName'].disable();
    this.userForm.controls['documentNo'].disable();

    this.userForm.controls['isDocumentNeeded'].valueChanges.subscribe({
      next: (isChecked: boolean) => {
        debugger;
        if (isChecked == true) {
          this.getControllInstance('documentName').enable();
          this.getControllInstance('documentNo').enable();
          this.userForm.controls['documentName'].addValidators([Validators.required])
          this.userForm.controls['documentNo'].addValidators([Validators.required])
        } else {
         // this.getControllInstanceByGet('documentName')?.disable();
          //this.getControllInstanceByGet('documentNo')?.disable();
          //this.getControllInstanceByGet('documentName')?.setValue("")
          //this.getControllInstanceByGet('documentNo')?.setValue("");
           this.userForm.controls['documentName'].removeValidators([Validators.required])
          this.userForm.controls['documentNo'].removeValidators([Validators.required])
        }
        this.userForm.updateValueAndValidity();
      }
    })

  }

  getControllInstance(controlName: string) {
    return this.userForm.controls[controlName];
  }

  getControllInstanceByGet(controlName: string) {
    return this.userForm.get(controlName)
  }

}
