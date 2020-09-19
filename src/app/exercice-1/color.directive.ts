import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})

export class ColorDirective implements OnInit{

  constructor(private el: ElementRef, private renderer: Renderer2) {}

   ngOnInit(){   
     this.renderer.setStyle(this.el.nativeElement,"color","grey")
    }

    @HostListener('window:keydown.ArrowDown', ['$event']) keyDown($event) {
      this.renderer.setStyle(this.el.nativeElement,"color","blue")
    }
    @HostListener('window:keydown.ArrowUp', ['$event']) keyUp($event) {
      this.renderer.setStyle(this.el.nativeElement,"color","red")
    }
    @HostListener('window:keydown.ArrowLeft', ['$event']) keyLeft($event) {
      this.renderer.setStyle(this.el.nativeElement,"color","green")
    }
    @HostListener('window:keydown.ArrowRight', ['$event']) keyRight($event) {
      this.renderer.setStyle(this.el.nativeElement,"color","orange")
    }
}
