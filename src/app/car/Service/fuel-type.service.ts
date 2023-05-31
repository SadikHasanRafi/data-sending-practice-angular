import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuelTypeService {

  getFuelTypes(){
    return [
      "Dissel","Octen","Battery"
    ]
  }
  mew:string = "mew"
}
