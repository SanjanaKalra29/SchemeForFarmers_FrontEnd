import { soldCrops } from './soldcrop';
import { SoldhistoryService } from './../soldhistory.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewsoldhistory',
  templateUrl: './viewsoldhistory.component.html',
  styleUrls: ['./viewsoldhistory.component.css']
})
export class ViewsoldhistoryComponent implements OnInit {

  userid:number;
  id:number;
  soldcrp:soldCrops[];
  name:string;
  quantity:number;
  baseprice:number;
  soldprice:number;
  constructor(private service:SoldhistoryService) { }

  ngOnInit(): void {
this.userid=Number(sessionStorage.getItem('UserId')); 
    this.service.fetchAllSoldCrops(this.userid).subscribe(data=>{
      alert(JSON.stringify(data));
      this.soldcrp = data.sold;
  })

}
}