import { Directive, ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHelloworld]'
})
export class HelloworldDirective {
  @Input() colorCode:string | undefined;
  constructor(private el: ElementRef) { // 대상 엘리먼트(HTML 태그, HTML Element)

  }

  @HostListener('mouseenter') onMouseEnter() {  //마우스가 들어오면
    //this.changeCss('blue');
    this.changeCss2('White');
    this.changeCss(this.colorCode ? this.colorCode : '#9898ff');
  }
  @HostListener('mouseleave') onMouseLeave() {  //마우스가 나가면
    this.changeCss(null);
    this.changeCss2(null);
  }

  private changeCss(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.fontWeight = color? 'bold': 'normal';
  }
  private changeCss2(color: string | null) {
    this.el.nativeElement.style.color = color;
  }
}
