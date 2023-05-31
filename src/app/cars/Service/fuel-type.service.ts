import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuelTypeService {

  constructor() { }
  fuelType:string[]=["diesel🛢","octan⛽","battery🔋","blood🩸"]
}
