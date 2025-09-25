import { NgFor } from '@angular/common';
import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ModaleContactComponent } from '../modale-contact/modale-contact.component';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [NgFor, ModaleContactComponent],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.css'
})
export class CallToActionComponent implements AfterViewInit {
  advantages = [
    {
      title: '100% personnalisé',
      description: 'Pas un audit automatique générique.',
      icon: '/images/accountability_11157177.png'
    },
    {
      title: 'Résultats concrets',
      description: 'On montre où vous perdez vos clients.',
      icon: '/images/performance-appraisal_16761137.png'
    },
    {
      title: 'Approche unique',
      description: 'Pas de concurrence directe → méthode exclusive.',
      icon: '/images/target_17843502.png'
    },
    {
      title: 'Gagnez du temps et de l’argent',
      description: 'Dès le premier mois, vous optimisez vos ressources.',
      icon: '/images/time-is-money_9300618.png'
    }
  ];

  stats = [
    {
      value: 350,
      suffix: '+',
      label: 'Audits déjà réalisés',
      icon: '/images/quality_12515816.png'
    },
    {
      value: 98,
      suffix: '%',
      label: 'Satisfaction client',
      icon: '/images/feedback_7338042.png'
    },
    {
      value: 90,
      suffix: 'j',
      label: 'Plan d’action sur 90 jours',
      icon: '/images/90-days_18336205.png'
    }
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const advantageCards = this.el.nativeElement.querySelectorAll('.advantage-card');
    const statCards = this.el.nativeElement.querySelectorAll('.stat-card');

    // Animation des avantages
    gsap.fromTo(
      advantageCards,
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
      }
    );

    // Animation des chiffres avec compteur
    statCards.forEach((card: HTMLElement, index: number) => {
      const numberEl = card.querySelector('div.text-4xl') as HTMLElement;
      const stat = this.stats[index];
      
      // Stocker la valeur initiale
      numberEl.textContent = '0' + (stat.suffix || '');

      // Apparition de la carte
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            onEnter: () => {
              // Compteur
              const obj = { val: 0 };
              gsap.to(obj, {
                val: stat.value,
                duration: 2,
                ease: 'power1.out',
                onUpdate: () => {
                  numberEl.textContent = Math.floor(obj.val).toString() + (stat.suffix || '');
                }
              });
            }
          }
        }
      );
    });
  }

}
