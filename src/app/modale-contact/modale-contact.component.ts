import { NgIf, NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-modale-contact',
  standalone: true,
  imports: [NgIf, FormsModule, NgFor],
  templateUrl: './modale-contact.component.html',
  styleUrl: './modale-contact.component.css',
  animations: [
    trigger('backdropFade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('modalFade', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(20px) scale(0.95)'
      })),
      state('in', style({
        opacity: 1,
        transform: 'translateY(0) scale(1)'
      })),
      transition('void => in', [
        animate('200ms 50ms ease-out')
      ]),
      transition('in => void', [
        animate('150ms ease-in')
      ])
    ])
  ]
})
export class ModaleContactComponent {
  // États pour les animations de focus
  nameFocus = false;
  emailFocus = false;
  phoneFocus = false;
  messageFocus = false;

  constructor() {
    emailjs.init('TON_USER_ID'); // ton userID MailJS
  }
  
  @Output() closeModalEvent = new EventEmitter<void>();
  isVisible = false;

  // Configuration des animations
  animations = [
    trigger('inputFocus', [
      state('focus', style({
        transform: 'translateY(0)',
        opacity: 1,
        'box-shadow': '0 0 0 3px rgba(16, 185, 129, 0.2)'
      })),
      state('blur', style({
        transform: 'translateY(0)',
        opacity: 1,
        'box-shadow': 'none'
      })),
      transition('blur => focus', [
        animate('0.2s ease-in-out')
      ]),
      transition('focus => blur', [
        animate('0.1s ease-in-out')
      ])
    ])
  ];

  

  showModal() {
    this.isVisible = true;
  }

  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  closeModal() {
    this.isVisible = false;
    this.closeModalEvent.emit();
  }
  async sendEmail() {
    try {
      const templateParams = {
        name: this.formData.name,
        email: this.formData.email,
        phone: this.formData.phone,
        message: this.formData.message
      };

      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY');
      
      alert('Message envoyé avec succès 🎉');
      this.formData = { name: '', email: '', phone: '', message: '' };
      this.closeModal();
    } catch (err) {
        console.error('Erreur:', err);
        alert('Une erreur est survenue 😞');
    }
  }

  goToGoogleSheet() {
    window.open('https://docs.google.com/spreadsheets/d/TON_ID/edit', '_blank');
  }
}
