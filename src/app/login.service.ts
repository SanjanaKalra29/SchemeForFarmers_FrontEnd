import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { login } from './login/login';
import { Observable } from 'rxjs';
import { LoginStatus } from './login/LoginStatus';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  userLogin(logindata:login): Observable<LoginStatus>{
    let url = 'http://localhost:8585/login';
    return this.http.post<LoginStatus>(url, logindata);

  }
}
