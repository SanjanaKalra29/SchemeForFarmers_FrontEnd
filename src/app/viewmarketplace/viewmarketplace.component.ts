import { FarmermarketService } from './../farmermarket.service';
import { availablecrop } from './../biddermarketplace/availablecrop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewmarketplace',
  templateUrl: './viewmarketplace.component.html',
  styleUrls: ['./viewmarketplace.component.css']
})
export class ViewmarketplaceComponent implements OnInit {

  userid:number;
  name:string;
  currbid:number;
  crop: availablecrop[];
  constructor(private service:FarmermarketService) { }

  ngOnInit(): void {
    this.userid=Number(sessionStorage.getItem('UserId')); 
    this.service.fetchAllCrops(this.userid).subscribe(data=>{
      alert(JSON.stringify(data));
     // this.soldcrp = data.sold;
  })

}
}
