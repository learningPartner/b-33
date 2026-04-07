import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-category',
  imports: [ReactiveFormsModule],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category implements OnInit {


  categoryForm: FormGroup = new FormGroup({
    categoryId: new FormControl(0),
    categoryName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    isActive: new FormControl(false)
  })

  userSrv = inject(UserService);

  categoryList = signal<any>([]);

  newCategory: any = {
    "categoryId": 0,
    "categoryName": "",
    "isActive": false
  }

  ngOnInit(): void {
    this.getAllVCategory();
  }

  onEdit(data: any) {
    this.categoryForm = new FormGroup({
      categoryId: new FormControl(data.categoryId),
      categoryName: new FormControl(data.categoryName),
      isActive: new FormControl(data.isActive)
    })
  }

  getAllVCategory() {
    this.userSrv.getCategory().subscribe({
      next: (res: any) => {
        this.categoryList.set(res.data)
      }
    })
  }

  onSaveCetegory() {
    if (!this.categoryForm.invalid) {
      const formValue = this.categoryForm.value;
      debugger;
      this.userSrv.onSaveCategory(formValue).subscribe({
        next: (res) => {
          debugger;
          this.getAllVCategory();
        }
      })
    } else {
      alert("Form in Invalid")
    }

  }


}
