import { Routes } from '@angular/router';
import { LoginComponent } from './pages/feature-login/login/login.component';
import { SignupComponent } from './pages/feature-login/signup/signup.component';
import { ForgotPasswordComponent } from './pages/feature-login/forgot-password/forgot-password.component';
import { ResetComponent } from './pages/feature-login/reset/reset.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {   path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path:"login",
        component: LoginComponent
    },
    {
        path:"signup",
        component: SignupComponent
    },
    {
        path:"forgot-password",
        component: ForgotPasswordComponent
    },
    {
        path:"reset/:user",
        component: ResetComponent
    },
    {
        path:"home",
        component: HomeComponent
    }
];
