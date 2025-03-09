import { Routes } from '@angular/router';
import { HomeComponent } from './components/main/main.component';
import { AuthGuard } from './components/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', loadComponent: () => import('./components/form/sign-in.component').then(m => m.SignInComponent) },
  { path: 'register', loadComponent: () => import('./components/form/sign-up.component').then(m => m.SignUpComponent) },
  { path: 'black', loadComponent: () => import('./components/black_man_page/black_man.component').then(m => m.Black_manComponent), canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];
