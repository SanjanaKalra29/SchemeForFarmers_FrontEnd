import { NotisDto } from './notification/notisDto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  getNotification(id:number): Observable<NotisDto>{
    let url = 'http://localhost:8585/bid?cropid='+id;
    return this.http.get<NotisDto>(url);

  }
}
