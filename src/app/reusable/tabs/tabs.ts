import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'app-tabs',
  imports: [NgClass],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
})
export class Tabs {

  @Input() tabList: string[]= [];

  selectedTab: string = '';

  onSelectTab(tabName: string) {
    this.selectedTab =  tabName;
  }
}
