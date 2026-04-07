import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass, FormsModule, NgStyle],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css',
})
export class AttDirective {

  divClassName: string = '';
  isDiv2Active: boolean = false;
  div3ClassName: string = '';

  div11BgColorName: string = '';

  myCss = {
    color: 'red',
    'background-color': 'blue',
    'font-size': '32px'
  }

  languageList: any[] = [
    { langName: 'Angular', colorClassName: 'btn-danger' },
    { langName: 'ReactJs', colorClassName: 'btn-primary' },
    { langName: 'Dot net', colorClassName: 'btn-secondary' },
    { langName: 'Java', colorClassName: 'btn-warning' },
  ]

  addDiv1Class(className: string) {
    this.divClassName = className;
  }


  addDiv11Color(color: string) {
    this.div11BgColorName = color;
  }
}
