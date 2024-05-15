import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { ActivatedRoute, Router } from '@angular/router';
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
    private toastr: ToastrService,
    private route: ActivatedRoute

  ){
    this.resetForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
  submit(){
    const filter: RequestLogin =
      {
        email: this.route.snapshot.paramMap.get('user')!,
        senha: this.resetForm.value.password,
        confirmarSenha: this.resetForm.value.passwordConfirm
      }
      if (filter.senha !== filter.confirmarSenha) {
        this.toastr.error("As senhas são diferentes.");
        return;
      } 
      this.LoginService.update(filter).subscribe
      (response => {
        if (response.sucesso == true) {
          this.toastr.success("Senha alterada com sucesso!")
          this.router.navigate(["login"])
        }
        if (response.sucesso == false && response.mensagem =='Email não cadastrado!')
        {
          this.toastr.error("E-mail não cadastrado!")
        }
        if(response.sucesso == false && response.mensagem == null)
        {
         this.toastr.error("Falha ao atualizar senha. Por favor, tente novamente mais tarde.")
        }
     });
  }

  navigate(){
    this.router.navigate(["login"])
  }
}
