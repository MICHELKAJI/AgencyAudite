import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-partener',
  standalone: true,
  imports: [NgFor],
  templateUrl: './partener.component.html',
  styleUrl: './partener.component.css'
})
export class PartenerComponent {
  logos = [
    { name: 'Partenaire A', url: '/images/bcnudh.png' },
    { name: 'Partenaire B', url: '/images/ong.png' },
    { name: 'Partenaire C', url: '/images/ngaliema.png' },
    { name: 'Partenaire D', url: '/images/cdrasm.png' },
    { name: 'Partenaire E', url: '/images/Plan-de-travail-4-2048x819.png' }
    // Ajoute d'autres logos ici
  ];
}
