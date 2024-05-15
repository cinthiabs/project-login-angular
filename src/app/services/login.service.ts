import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { DadosResponse, LoginResponse, RequestLogin } from '../types/login-response.type';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private Url = environment.BaseUrl;
  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string):Observable<DadosResponse<LoginResponse>>{
    return this.httpClient.get<DadosResponse<LoginResponse>>(`${this.Url}/User?email=${email}&password=${password}`)
  }
  create(filter: RequestLogin): Observable<DadosResponse<LoginResponse>>{
    return this.httpClient.post<DadosResponse<LoginResponse>>(`${this.Url}/User`, filter)
  }
  update(filter: RequestLogin): Observable<DadosResponse<LoginResponse>>{
    return this.httpClient.post<DadosResponse<LoginResponse>>(`${this.Url}/User/Update`, filter)
  }
  sendEmail(email: string): Observable<any>{
    return this.httpClient.post<any>(`${this.Url}/User/SendEmail?email=${email}`,email )
  }
}

