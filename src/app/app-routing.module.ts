import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { GitComponent } from './git/git.component';

const routes: Routes = [

     { path: '', redirectTo: 'login', pathMatch: 'full' },
     { path: 'login', component: LoginComponent },
     { path: 'employee', component: EmployeesComponent},
     { path: 'formvalidation', component: FormValidationComponent },
     {
         path: 'userform', loadChildren: () =>
             import('./user-form/user-form.module').then(m => m.UserFormModule)
     },
    { path: 'git', component: GitComponent },
    { path: '**', component: PageNotFoundComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
 export const routingComponent = [FormValidationComponent, LoginComponent, PageNotFoundComponent, GitComponent]
