import { Sold } from './viewsoldhistory/sold';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoldhistoryService {

  constructor(private http: HttpClient) { }

  fetchAllSoldCrops(id:number): Observable<Sold>{
    let url = 'http://localhost:8585/bid?farmerid='+id;
    return this.http.get<Sold>(url);

  }
}
