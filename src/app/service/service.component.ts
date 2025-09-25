import { NgFor } from '@angular/common';
import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [NgFor],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent implements AfterViewInit {
  
  auditItems = [
    'Analyse site web (UX, vitesse, SEO, conversion)',
    'Présence digitale & réseaux sociaux',
    'Réputation en ligne & Google My Business',
    'Concurrence & benchmark',
    'Opportunités de croissance',
    'Plan d’action sur 90 jours'
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const items = this.el.nativeElement.querySelectorAll('.check-item');

    gsap.fromTo(items,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: this.el.nativeElement,
          start: 'top 80%',
        }
      });
  }

}
