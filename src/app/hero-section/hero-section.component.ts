import { Component, AfterViewInit, ElementRef, inject  } from '@angular/core';
import { gsap } from "gsap";
import { ModaleContactComponent } from '../modale-contact/modale-contact.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ModaleContactComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements AfterViewInit {
  private el = inject(ElementRef);

  ngAfterViewInit() {
    gsap.from(this.el.nativeElement.querySelectorAll('.fade-up'), {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
  }

}
