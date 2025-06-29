import { Routes } from '@angular/router';
import { App } from './app';
import { NavbarComponent } from './navbar-component/navbar-component';
import { DashboardComponent } from './dashboard-component/dashboard-component';

export const routes: Routes = [
   {path : '' , component : DashboardComponent},
   {path : 'navbar', component : NavbarComponent}
];
