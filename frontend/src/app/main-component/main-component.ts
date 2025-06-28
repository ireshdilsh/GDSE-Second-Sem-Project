import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar-component/navbar-component';
import { LandingComponent } from '../landing-component/landing-component';
import { FooterComponent } from '../footer-component/footer-component';

@Component({
  selector: 'app-main-component',
  imports: [NavbarComponent,LandingComponent,FooterComponent],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css'
})
export class MainComponent {

}
