import { Component,  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {


  @ViewChild('templateForm', { static: false }) form !: NgForm;

  templateDrivenForm :unknown

  handleSubmitData(){
    this.templateDrivenForm = this.form.value
    console.log(this.templateDrivenForm)
  }
}
