import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.css']
})
export class CropComponent{
  crop: Crop = new Crop();
  constructor() { }

  ngOnInit(): void {
  }  
  

}

class Crop{
  name: string;
  quantity:number;
  cropType:string;
  basePrice:number;
  fertilizerType:string;
  status:string;
  soilPH:DoubleRange;
  dateAddedOn:Date;
  startDate:Date;
  endDate:Date;
}
