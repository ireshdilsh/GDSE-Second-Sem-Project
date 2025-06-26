import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignupComponent } from './signup-component/signup-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SignupComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frontend';
}
