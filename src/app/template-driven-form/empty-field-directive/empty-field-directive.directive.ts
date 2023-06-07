import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appEmptyFieldDirective]'
})
export class EmptyFieldDirectiveDirective implements OnInit {

  constructor(private element:ElementRef) { }

  @Input() appEmptyFieldDirective !:string 

  ngOnInit(): void {
    // this.element.nativeElement.style.background = 'bg-blue-500'
    this.element.nativeElement.classList.add('italic');

    console.log(this.element.nativeElement)
    console.log(this.appEmptyFieldDirective)
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.classList.add(this.appEmptyFieldDirective);
}

@HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.classList.remove(this.appEmptyFieldDirective);
}

}
