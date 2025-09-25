import { NgFor, NgStyle } from '@angular/common';
import { Component, AfterViewInit, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.css'
})
export class WhyUsComponent implements AfterViewInit {
   @ViewChild('aboutRoot', { static: true }) aboutRoot!: ElementRef;
  private ctx!: gsap.Context;

  ngAfterViewInit(): void {
    // Contexte GSAP pour nettoyer proprement quand le composant est détruit
    this.ctx = gsap.context(() => {
      // Titre : apparition ligne par ligne
      gsap.from('.stagger-title > *', {
        opacity: 0,
        y: 16,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.stagger-title',
          start: 'top 85%',
        },
      });

      // Vidéo : slide depuis la gauche
      gsap.from('.video-card', {
        opacity: 0,
        x: -40,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-grid',
          start: 'top 80%',
        },
      });

      // Cartes : pop + fade avec stagger
      gsap.from('.stat-card', {
        opacity: 0,
        y: 28,
        scale: 0.98,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.about-grid',
          start: 'top 80%',
        },
      });
    }, this.aboutRoot.nativeElement);
  }

  ngOnDestroy(): void {
    this.ctx?.revert();
  }
}
