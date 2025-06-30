import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar-component/navbar-component';
import { LandingComponent } from './landing-component/landing-component';
import { ChatbotComponent } from './chatbot-component/chatbot-component';
import { LoginComponent } from './login-component/login-component';
import { RegisterComponent } from './register-component/register-component';

export const routes: Routes = [
   {path : '' , component : LandingComponent},
   {path : 'navbar', component : NavbarComponent},
   {path : 'ask/ai/agent', component : ChatbotComponent},
   {path : 'auth/user' , component : LoginComponent},
   {path : 'create/user/account' , component : RegisterComponent}
];
