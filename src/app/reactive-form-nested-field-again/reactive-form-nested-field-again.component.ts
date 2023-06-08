import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-nested-field-again',
  templateUrl: './reactive-form-nested-field-again.component.html',
  styleUrls: ['./reactive-form-nested-field-again.component.css']
})
export class ReactiveFormNestedFieldAgainComponent implements OnInit {
  myForm!:FormGroup

  constructor(private fromBuilder:FormBuilder){}

  ngOnInit(): void {
    this.myForm = this.fromBuilder.group({
      email:"",
      phones:this.fromBuilder.array([])
    })
  }

  get phoneForms(){
    return this.myForm.get('phones') as FormArray
  }

  addPhone(){
    const phone = this.fromBuilder.group({
      area:[],
      prefix:[],
      line:[]
    })
    this.phoneForms.push(phone)
  }

  deletePhone(i:any){
  this.phoneForms.removeAt(i)
  }
}
