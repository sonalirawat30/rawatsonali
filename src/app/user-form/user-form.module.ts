import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserFormRoutingModule } from './user-form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserFormComponent],
  imports: [
    CommonModule,
    UserFormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserFormModule {
  constructor() {
    console.log('user-form module loaded')
  }
}
