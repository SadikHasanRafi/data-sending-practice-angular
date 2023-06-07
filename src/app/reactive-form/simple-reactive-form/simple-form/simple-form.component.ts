import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import {  FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent {

  logInForm = new FormGroup({
    firstName : new FormControl("",[Validators.max(10),Validators.min(2)]),
    lastName : new FormControl("",[Validators.requiredTrue]),
    email : new FormControl("",Validators.email),
  })
  logInUser(){
    // console.log(this.logInForm.value)
    console.log(this.logInForm.getError)
    console.warn(this.logInForm)
    // console.log(this.logInForm)
  }

  
  get user() {
    return this.logInForm.get('email')
  }
  

}

