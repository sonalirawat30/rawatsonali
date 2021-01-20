import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidationRoutingModule } from './form-validation-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormValidationRoutingModule
  ]
})
export class FormValidationModule { 
  constructor(){
    console.log("formvalidation is loaded")
  }
}
