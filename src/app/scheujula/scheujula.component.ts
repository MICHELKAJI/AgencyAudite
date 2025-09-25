import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-scheujula',
  standalone: true,
  imports: [],
  templateUrl: './scheujula.component.html',
  styleUrl: './scheujula.component.css'
})
export class ScheujulaComponent implements AfterViewInit {
  calendlyUrl: string = 'https://calendly.com/mivagroupe/nouvelle-reunion';
  // ⚠️ Mets ton lien Calendly ici

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    // Animation apparition du container
    gsap.fromTo(
      this.el.nativeElement.querySelector('.rdv-container'),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: this.el.nativeElement.querySelector('.rdv-container'),
          start: 'top 80%',
        }
      }
    );
  }

}
