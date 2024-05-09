import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [DefaultLoginLayoutComponent , ReactiveFormsModule, PrimaryInputComponent ],
  providers:[LoginService],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  loginForm!: FormGroup;
  
  constructor(
    private router: Router,
    private LoginService: LoginService,
    private toastr: ToastrService

  ){
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
  submit(){
    this.LoginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => this.toastr.success("Login feito com sucesso!"),
      error: () => this.toastr.error("Erro inesperado! Tente novamente mais tarde!")
    })
  }
  navigate(){
    this.router.navigate(["login"])
  }
}
