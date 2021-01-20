import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormValidationComponent } from './form-validation/form-validation.component'; 
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
     { path: '', redirectTo: 'formvalidation', pathMatch: 'full' },
     { path: 'login', component: LoginComponent },
     { path: 'employee', component: EmployeesComponent, canActivate: [AuthGuard] },
     { path: 'formvalidation', component: FormValidationComponent, canActivate: [AuthGuard] },
     { path: 'userform', loadChildren: ()=>
       import('./user-form/user-form.module').then(m=>m.UserFormModule), canActivate: [AuthGuard] },
     { path: '**', component: PageNotFoundComponent },
     { path: '', component: HomeComponent, canActivate: [AuthGuard] }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponent = [FormValidationComponent,  PageNotFoundComponent, HomeComponent]
