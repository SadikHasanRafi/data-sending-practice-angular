import { Component, OnInit } from '@angular/core';
import { FuelTypeService } from './Service/fuel-type.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{

  fuel:string[];
  mew:string;

  constructor(private fuelType:FuelTypeService){
    this.fuel = fuelType.getFuelTypes()
    this.mew = fuelType.mew
  }

  ngOnInit(): void {
    const arr = this.fuel
    console.log(arr[1])
    console.log(this.mew)
  }

}
