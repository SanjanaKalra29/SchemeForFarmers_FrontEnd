import { Crop } from './crop/crop.component';
import { LiveBid } from './biddermarketplace/bidder';
import { Observable } from 'rxjs';
import { Value, BidStatus } from './biddermarketplace/bidStatus';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BidderService {

  constructor(private http: HttpClient ) { }

  fetchActiveBids():Observable<Crop>{//Active cops object
    let url='http://localhost:8282/RestApp/api/getlist';
      return this.http.get(url);
  }
  getCurrrentBid(id:number): Observable<Value>{
    let url = 'http://localhost:8585/getcurrentprice';
    return this.http.post<Value>(url, id);

  }

  submitbid(live:LiveBid): Observable<BidStatus>{
    let url = 'http://localhost:8585/submit';
    return this.http.post<BidStatus>(url, live);

  }
}
