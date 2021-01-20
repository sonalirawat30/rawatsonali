import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators , FormBuilder} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'pm-user-form',
  templateUrl:'./user-form.component.html', 
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
public myReactiveForm:FormGroup;
submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm();
  }
  
 public signUpForm():void{
    this.myReactiveForm = this.formBuilder.group ({
      Name:[null,[Validators.required]] ,
      Email:[null,[Validators.required]],
      Mobile_No:[null,[Validators.required]],
      Password:[null,[Validators.required]],
      confirmPassword:[null,[Validators.required]],
      phone:[null,[Validators.required]],
      Gender:[null,[Validators.required]],
      City:[null,[Validators.required]],

    });
  }
      get f() {
    return this.myReactiveForm.controls;
  }
  public onSubmit():void{
    this.submitted = true;
    if (this.myReactiveForm.valid) {
      alert('Form Submitted succesfully');
      console.log(this.myReactiveForm)
      }
    }
      onReset() {
        this.submitted = false;
        this.myReactiveForm.reset();
    }
  }