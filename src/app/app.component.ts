import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HeaderComponent } from './header/header.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroSectionComponent, HeaderComponent, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'agency';
}
