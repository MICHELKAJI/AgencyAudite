import { Component, HostListener } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, MenuComponent],
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
