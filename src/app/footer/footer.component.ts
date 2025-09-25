
import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { gsap } from 'gsap';




@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements AfterViewInit  {
   constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    gsap.from(this.el.nativeElement, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    });
  }

}
