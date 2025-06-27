import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignupComponent } from './signup-component/signup-component';
import { NavbarComponent } from './navbar-component/navbar-component';
import { LandingComponent } from './landing-component/landing-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,LandingComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frontend';
}
