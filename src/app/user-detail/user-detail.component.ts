import { Component, OnInit } from '@angular/core';
import { dataForm } from '../data/data-form';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
   dataForm:dataForm ={
    name:'',
    email:'',
    address:'',
    course:''
  };
  constructor() { }

  ngOnInit(): void {
  }
  public onClick():void{
     console.log(this.dataForm);
   }
}
