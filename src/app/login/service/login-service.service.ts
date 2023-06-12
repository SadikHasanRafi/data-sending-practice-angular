import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  formData:any;

  constructor() { }

  get isLoggedIn(){
    const str = localStorage.getItem('token')
    console.log(str)

    if (str) {
      return true
    }else{
      return false
    }

  }
  
  sendFormData(v : any) {
    // console.log("v = ",v)
    this.formData = v;
  }
  
}
