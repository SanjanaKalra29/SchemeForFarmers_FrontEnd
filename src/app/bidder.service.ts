
import { LiveBid } from './biddermarketplace/bidder';
import { Observable } from 'rxjs';
import { Value, BidStatus } from './biddermarketplace/bidStatus';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { activecrops } from './biddermarketplace/activecrops';

@Injectable({
  providedIn: 'root'
})
export class BidderService {

  constructor(private http: HttpClient ) { }

  fetchActiveBids():Observable<activecrops>{//Active cops object
    let url='http://localhost:8585/crops';
      return this.http.get<activecrops>(url);
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
