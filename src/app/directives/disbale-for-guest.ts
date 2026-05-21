import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisbaleForGuest]',
})
export class DisbaleForGuest implements AfterViewInit {

  constructor(private eleRef: ElementRef, private render: Renderer2) {
  }

  ngAfterViewInit(): void {
    debugger;
    const loggedRole = localStorage.getItem("loggedUserRole");
    if (loggedRole == "Guest") {
      this.render.setAttribute(this.eleRef.nativeElement, 'readonly', 'true');
      this.render.addClass(this.eleRef.nativeElement, 'disabled-style');
    } else {
      this.render.removeAttribute(this.eleRef.nativeElement, 'readonly');
      this.render.removeClass(this.eleRef.nativeElement, 'disabled-style');
    }
  }
}
