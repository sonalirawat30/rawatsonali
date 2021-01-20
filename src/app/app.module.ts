import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule,routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// import { UserFormComponent } from './user-form/user-form.component';
import { EmployeesComponent } from './employees/employees.component';
import { DataService } from './data.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GitComponent } from './git/git.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    // UserFormComponent,
    routingComponent,
    EmployeesComponent,
    LoginComponent,
    HomeComponent,
    GitComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule ,
    HttpClientModule,
    TableModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){}
 }

