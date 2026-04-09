import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-list',
  imports: [],
  templateUrl: './my-list.html',
  styleUrl: './my-list.css',
})
export class MyList {

  @Input() listOfItems: string[]=[];
  @Input() isMultiple: boolean = false;

  @Output() onItemSelect = new EventEmitter<string | string[]>();

  currentSelectedItem: string = '';

  selectedIds: string[]=[];

  courseName: string | number = '';

  onSelectItem(itemName: string) {
    debugger;
    if(this.isMultiple) {
      const itemIndex = this.selectedIds.findIndex(m=> m == itemName);
      if(itemIndex == -1) {
        this.selectedIds.push(itemName); 
      } else {
        this.selectedIds.splice(itemIndex,1);
      }
      this.onItemSelect.emit(this.selectedIds) 
    } else {
      this.currentSelectedItem = itemName;
      this.onItemSelect.emit(itemName)
    } 
  }

  checkIfItemSelected(itemName: string) {
    return this.selectedIds.includes(itemName)
  }

}

