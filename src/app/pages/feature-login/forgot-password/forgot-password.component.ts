import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
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
      email: new FormControl('',[Validators.required, Validators.email])
    })
  }
  submit(){
    this.LoginService.sendEmail(this.loginForm.value.email).subscribe(response => {
      console.log(response)
      if (response.sucesso == true) {
        this.toastr.success("E-mail enviado com sucesso!")
      }
      if (response.sucesso == false && response.mensagem =='Email não cadastrado!')
      {
        this.toastr.error("E-mail não cadastrado!")
      }
      if(response.sucesso == false && response.mensagem == 'Erro ao enviar o e-mail')
      {
       this.toastr.error("Falha ao enviar o e-mail. Por favor, tente novamente mais tarde.")
      }
   });
  }
  navigate(){
    this.router.navigate(["login"])
  }
}
