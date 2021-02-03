import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
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
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { LanguageComponent } from './language/language.component';
import { TranslateModule ,TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TimezoneComponent } from './timezone/timezone.component';
import { MomentModule } from 'ngx-moment';
import { CustomeDatePipe } from './custome-date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    // UserFormComponent,
    routingComponent,
    EmployeesComponent,
    LoginComponent,
    HomeComponent,
    GitComponent,
    ProfileComponent,
    HeaderComponent,
    LanguageComponent,
    TimezoneComponent,
    CustomeDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule ,
    HttpClientModule,
    TableModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:(http:HttpClient)=>{return new TranslateHttpLoader(http);},
        deps:[HttpClient]
      }
    }),
    MomentModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){}
 }

