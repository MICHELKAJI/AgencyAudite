import { Component, HostListener } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { NgClass } from '@angular/common';
import { ModaleContactComponent } from '../modale-contact/modale-contact.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, MenuComponent, ModaleContactComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isScrolled= false;

  @HostListener('window:scroll', [])
  onWindowScrolled(){
    this.isScrolled = window.scrollY >50;
  }
}
