import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HeaderComponent } from './header/header.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { FooterComponent } from './footer/footer.component';
import { TimelineComponent } from './timeline/timeline.component';
import { MethodeComponent } from './methode/methode.component';
import { ServiceComponent } from './service/service.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { ScheujulaComponent } from './scheujula/scheujula.component';
import { PartenerComponent } from './partener/partener.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroSectionComponent, HeaderComponent, WhyUsComponent,MethodeComponent,TimelineComponent,ServiceComponent, CallToActionComponent, ScheujulaComponent, PartenerComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'agency';
}
