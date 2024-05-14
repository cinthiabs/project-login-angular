import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetComponent } from './pages/reset/reset.component';

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
    }
];
