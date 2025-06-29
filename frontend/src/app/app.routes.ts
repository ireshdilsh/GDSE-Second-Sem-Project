import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar-component/navbar-component';
import { LandingComponent } from './landing-component/landing-component';

export const routes: Routes = [
   {path : '' , component : LandingComponent},
   {path : 'navbar', component : NavbarComponent}
];
