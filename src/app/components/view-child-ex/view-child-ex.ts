import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Signal } from '../signal/signal';
import { UserService } from '../../services/user-service';

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

  userSrv = inject(UserService);

  ngOnInit(): void {
    
    this.userSrv.onSearchTextSubject.subscribe((res:string)=>{
      debugger;
    })
    this.userSrv.onSearchBehviouSub.subscribe((res:string)=>{
      debugger;
    })
    //const tsxtval =  this.myTextElement.nativeElement.value;
  }

  ngAfterViewInit(): void {
    
    const tsxtval =  this.myTextElement.nativeElement.value;
  }
 
  readText() {
    const textValeu = this.myTextElement.nativeElement.value;
    
  }

  addCss(){
    this.myDivElement.nativeElement.style.backgroundColor = "red";
  }

  readSignal() {
    const coruse =  this.siganEx.courseName;
    
  }
}
