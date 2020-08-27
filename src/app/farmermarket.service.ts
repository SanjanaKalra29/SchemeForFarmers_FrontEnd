import { FinalAllCrop } from './viewmarketplace/finalallcrops';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FarmermarketService {

  constructor(private http: HttpClient) { }

  fetchAllCrops(id:number): Observable<FinalAllCrop>{
    let url = 'http://localhost:8585/crps';
    return this.http.get<FinalAllCrop>(url);

  }
}
