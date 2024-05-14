import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { RequestLogin } from '../../types/login-response.type';

interface ResetForm {
  name: FormControl,
  email: FormControl,
  password: FormControl,
  passwordConfirm: FormControl
}

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [DefaultLoginLayoutComponent , ReactiveFormsModule, PrimaryInputComponent ],
  providers:[LoginService],
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.scss'
})
export class ResetComponent {
  resetForm!: FormGroup;
  
  constructor(
    private router: Router,
    private LoginService: LoginService,
    private toastr: ToastrService

  ){
    this.resetForm = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(3)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
  submit(){
    const filter: RequestLogin =
      {
        nome: this.resetForm.value.name,
        email: this.resetForm.value.email,
        senha: this.resetForm.value.password,
        confirmarSenha: this.resetForm.value.passwordConfirm
      }
      if (filter.senha !== filter.confirmarSenha) {
        this.toastr.error("As senhas são diferentes.");
        return;
      } 
      this.LoginService.create(filter).subscribe
      (response => {
        if (response.sucesso == true) {
          this.toastr.success("Cadastro criado com sucesso!")
          this.router.navigate(["login"])
        }
        if (response.sucesso == false && response.mensagem =='E-mail já cadastrado!')
        {
          this.toastr.error("E-mail já cadastrado!")
        }
        if(response.sucesso == false && response.mensagem == null)
        {
         this.toastr.error("Falha ao criar cadastro. Por favor, verifique seu email e senha.")
        }
     });
  }

  navigate(){
    this.router.navigate(["login"])
  }
}
