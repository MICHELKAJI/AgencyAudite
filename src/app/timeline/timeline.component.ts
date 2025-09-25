import { NgClass, NgFor } from '@angular/common';
import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy  } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgClass],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const steps = this.el.nativeElement.querySelectorAll('.timeline-step');

    steps.forEach((step: HTMLElement, index: number) => {
      const isEven = index % 2 === 0;
      gsap.from(step, {
        scrollTrigger: {
          trigger: step,
          start: 'top 85%',
        },
        opacity: 0,
        x: isEven ? -100 : 100,
        duration: 0.8,
        ease: 'power3.out'
      });
    });
  }
}
