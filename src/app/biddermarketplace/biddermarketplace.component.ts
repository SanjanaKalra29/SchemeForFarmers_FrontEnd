import { CropDto } from './cropdto';
import { BidderService } from './../bidder.service';
import { Router } from '@angular/router';
import{LiveBid} from './bidder';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'biddermarketplace',
  templateUrl: './biddermarketplace.component.html',
  styleUrls: ['./biddermarketplace.component.css']
})
export class BiddermarketplaceComponent implements OnInit {

  live:LiveBid =new LiveBid();
  id:number;
  name:string;
  currbid:number;
  livebid:number;
  bidid:number;
  crop:CropDto=new CropDto();
 constructor(private service:BidderService,private router: Router) {}
  ngOnInit(): void {

    this.service.fetchActiveBids().subscribe(data=>{
      alert(JSON.stringify(data));
      this.crop=data;
    })
  } 
  setidBid(id:number,name:string,currbid:number){

    this.id=id;
    this.name=name;
    //hit to servier to get the latest current bid
   this.service.getCurrrentBid(this.id).subscribe(data=>{
    alert(JSON.stringify(data));
    this.currbid=data.CurrentBid;
   })
  }

  makebid(id:number,currbid:number,livebid:number){

    if(livebid>(currbid+100)){
      //alert("bid succeess");
      this.live.CropId=id;
      this.live.BidPrice=livebid;
      this.live.BidId=this.bidid;

      this.service.submitbid(this.live).subscribe(data=>{
        alert(JSON.stringify(data));
        if(data.status =="SUCCESS"){
          alert("Congrats Bid successfull");
          //Route to the market place
        }
        else{
          alert("ERror!! Please try again");
        }
      })
    }
    else{
      alert("Enter a proper bid value")
    }

  }
 
}
