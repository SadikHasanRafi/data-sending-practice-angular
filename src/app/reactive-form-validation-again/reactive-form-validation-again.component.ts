import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs';

@Component({
  selector: 'app-reactive-form-validation-again',
  templateUrl: './reactive-form-validation-again.component.html',
  styleUrls: ['./reactive-form-validation-again.component.css']
})
export class ReactiveFormValidationAgainComponent implements OnInit {
  myFormGroup !: FormGroup;
  currentStreamState : unknown;
  constructor(private fromBuilder:FormBuilder){}

  ngOnInit(): void {
    this.myFormGroup = this.fromBuilder.group({
      password:"",
      email:"",
      number:""
    })
    this.myFormGroup.valueChanges
    .pipe(
      map(value => value.email), // Extract the email value from the form value object
      debounceTime(4300), // Wait for 300 milliseconds of inactivity before emitting the latest value
      distinctUntilChanged(), // Only emit distinct values (ignore consecutive duplicates)
      filter(email => email.includes('@')) // Filter out email values that don't contain '@'
    )
    .subscribe(email => {
      console.log('Email value changed:', email);
      this.currentStreamState = email;
      // Perform actions based on the changed email value
    });
  
  }

  handleSubmit(){
    console.log("current value is ",this.currentStreamState)
  }

}
