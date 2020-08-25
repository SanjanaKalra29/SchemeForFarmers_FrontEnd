import { Address, Land } from './farmerregistration/registrationentity';
import { RegistrationStatus } from './farmerregistration/RegistrationStatus';
import { Observable } from 'rxjs';
import { Register } from './farmerregistration/farmerregistration.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  userFarmer(register:Register,addres:Address,land:Land): Observable<RegistrationStatus>{
    let url = 'http://localhost:8585/register';
    return this.http.post<RegistrationStatus>(url, register);
}

userBidder(register:Register,addres:Address): Observable<RegistrationStatus>{
  let url = 'http://localhost:8585/register';
  return this.http.post<RegistrationStatus>(url, register);
}
}