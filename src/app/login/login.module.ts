import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, CardModule, InputTextModule, PasswordModule } from 'primeng/primeng';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';



@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, InputTextModule, CardModule, PasswordModule, ReactiveFormsModule, ButtonModule]
})
export class LoginModule {}
