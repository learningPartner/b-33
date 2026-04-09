import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { Alert } from "../../reusable/alert/alert";
import { ProgressBar } from "../../reusable/progress-bar/progress-bar";
import { Tabs } from "../../reusable/tabs/tabs";
import { MyButton } from "../../reusable/my-button/my-button";
import { MyImage } from "../../reusable/my-image/my-image";
import { MyList } from "../../reusable/my-list/my-list";

@Component({
  selector: 'app-category',
  imports: [ReactiveFormsModule, Alert, ProgressBar, Tabs, MyButton, MyImage, MyList],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category implements OnInit {

  alertMesaage: string = "This is from Category Page";

  myTabList: string []= ["Category List", "Category Form"]

  categoryForm: FormGroup = new FormGroup({
    categoryId: new FormControl(0),
    categoryName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    isActive: new FormControl(false)
  })

  userSrv = inject(UserService);

  categoryList = signal<any>([]);
  currentTab: string = 'Category List';

  newCategory: any = {
    "categoryId": 0,
    "categoryName": "",
    "isActive": false
  }

  ngOnInit(): void {
    this.getAllVCategory();
  }

  getTabChange(tabName: string) {
    debugger;
    this.currentTab =  tabName;
  }

  onSaveBtnClicked() {
    debugger;
  }

  onUpdateBtnClicked() {
    debugger;
  }
  
  getSelecteItem(itemName: string | string[]) {
    debugger;
  }

  onEdit(data: any) {
    this.categoryForm = new FormGroup({
      categoryId: new FormControl(data.categoryId),
      categoryName: new FormControl(data.categoryName),
      isActive: new FormControl(data.isActive)
    })
    this.currentTab = "Category Form"
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
