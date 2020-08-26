import { availablecrop } from './../biddermarketplace/availablecrop';
import { Crop } from './../crop/crop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewmarketplace',
  templateUrl: './viewmarketplace.component.html',
  styleUrls: ['./viewmarketplace.component.css']
})
export class ViewmarketplaceComponent implements OnInit {

  id:number;
  name:string;
  currbid:number;
  crop: availablecrop[];
  constructor() { }

  ngOnInit(): void {
  }

}
