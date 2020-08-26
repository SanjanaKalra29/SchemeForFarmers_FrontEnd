import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'biddermarketplace',
  templateUrl: './biddermarketplace.component.html',
  styleUrls: ['./biddermarketplace.component.css']
})
export class BiddermarketplaceComponent implements OnInit {
fruits : String[]=["Mango","Orange","orange"]
  constructor() { }

  Arr = Array; //Array type captured in a variable
  num:number = 5;

  ngOnInit(): void {
  } 

}
