import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Signal } from '../signal/signal';

@Component({
  selector: 'app-view-child-ex',
  imports: [Signal],
  templateUrl: './view-child-ex.html',
  styleUrl: './view-child-ex.css',
})
export class ViewChildEx implements OnInit,AfterViewInit {

  @ViewChild('myText') myTextElement!:  ElementRef;
  @ViewChild("myDiv") myDivElement!: ElementRef;

  @ViewChild(Signal)  siganEx!: Signal;

  ngOnInit(): void {
    debugger;
    //const tsxtval =  this.myTextElement.nativeElement.value;
  }

  ngAfterViewInit(): void {
    debugger;
    const tsxtval =  this.myTextElement.nativeElement.value;
  }
 
  readText() {
    const textValeu = this.myTextElement.nativeElement.value;
    debugger;
  }

  addCss(){
    this.myDivElement.nativeElement.style.backgroundColor = "red";
  }

  readSignal() {
    const coruse =  this.siganEx.courseName;
    debugger;
  }
}
