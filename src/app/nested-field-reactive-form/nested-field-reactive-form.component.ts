import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-field-reactive-form',
  templateUrl: './nested-field-reactive-form.component.html',
  styleUrls: ['./nested-field-reactive-form.component.css'],
})
export class NestedFieldReactiveFormComponent {

  fromGroup !: FormGroup;
userInfo !: FormGroup;
  constructor(private fromBuilder:FormBuilder){
      this.userInfo = this.fromBuilder.group({
      firstName:"",
      lastName:"",
      phoneNumbers: this.fromBuilder.array([])
    })
  }

  
  public get userPhoneNumber() : any {
    return this.userInfo.get("phoneNumberArray") as FormArray
  }
  
  handleAddPhoneNumber(){
    const phoneNumberArray = this.userInfo.controls['phoneNumbers'] as FormArray
    phoneNumberArray.push(this.fromBuilder.group({
      phoneNumber : ""
    }))
  }


   
}
