import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginRegisterComponent} from './login-register/login-register.component';

const routes: Routes = [
   {path: '', redirectTo: '/login', pathMatch: 'full'},
   {path: 'login', component: LoginRegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
