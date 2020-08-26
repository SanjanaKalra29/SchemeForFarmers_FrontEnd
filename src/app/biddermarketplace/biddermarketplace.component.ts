
import { BidderService } from './../bidder.service';
import { Router } from '@angular/router';
import{LiveBid} from './bidder';
import { Component, OnInit } from '@angular/core';
import { availablecrop } from './availablecrop';

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
  liveprice:number;
  crop: availablecrop[];
  show:boolean=true;
  baseprice:number;
 constructor(private service:BidderService,private router: Router) {}
  ngOnInit(): void {

    this.service.fetchActiveBids().subscribe(data=>{
      alert(JSON.stringify(data));
      this.crop = data.crops;
      alert(JSON.stringify(this.crop[1].name));
      alert(this.crop.length);
      
     // this.baseprice=data.basePrice;
    })
  } 
  setidBid(id:number,name:string,currbid:number){

    this.id=id;
    this.name=name;
    this.show=!this.show; //to shoq the bid input only when the user clicks on bid
    //hit to servier to get the latest current bid
   this.service.getCurrrentBid(this.id).subscribe(data=>{
    alert(JSON.stringify(data));
    this.currbid=data.CurrentBid;
   })
  }

  makeBid(id:number,currbid:number,livebid:number){

    if(livebid>(currbid+100)){
      //alert("bid succeess");
      this.live.cropid=id;
      this.live.amount=livebid;
      this.live.userid=Number(sessionStorage.getItem('UserId')); 
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
