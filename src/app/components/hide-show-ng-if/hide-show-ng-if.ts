import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hide-show-ng-if',
  imports: [NgIf,FormsModule],
  templateUrl: './hide-show-ng-if.html',
  styleUrl: './hide-show-ng-if.css',
})
export class HideShowNgIf {

  isDiv1Visiable: boolean = true;
  selectedCast: string ='';
  isActive: boolean = true;
  address: string = '';
  
  isPinPresnt: any = null;
  isTextPresnet:string = '';
  studentMarks: number = 0;
 


  onShowDiv1() {
    this.isDiv1Visiable = true;
  }
  onHideDiv1() {
    this.isDiv1Visiable = false;
  }
  onSearch() {
    debugger; 
    this.isPinPresnt = this.address.includes('pin');
    this.isTextPresnet =  this.address.includes('pin') ?'Yes':'No';
  }
}
