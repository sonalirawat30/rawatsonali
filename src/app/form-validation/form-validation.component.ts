import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
 public data:any={}
  constructor() { }

  ngOnInit(): void {
  }
    public onClick():void{
       console.log(this.data);
     }
  }
