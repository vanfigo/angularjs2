import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRemarked]'
})
export class RemarkedDirective {

  @Input('appRemarked') newColor: string;

  constructor(private el:ElementRef) {
    console.log("Directive called");
    // el.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener('mouseenter') mouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.newColor || 'yellow';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }

}
