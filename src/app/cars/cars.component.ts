import { Component, Optional } from '@angular/core';
import { FuelTypeService } from './Service/fuel-type.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  fuels:string[]=[]
  constructor(@Optional() private fuelType:FuelTypeService) {
    this.fuels=fuelType.fuelType
  }
}
