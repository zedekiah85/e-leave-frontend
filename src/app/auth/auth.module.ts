// src/app/auth/auth.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // import FormsModule
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]),
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    AuthService,
    provideHttpClient(withInterceptorsFromDi()) 
  ]
})
export class AuthModule { }
