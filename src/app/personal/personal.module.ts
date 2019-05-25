import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalComponent } from './personal.component';
import {
  CardModule,
  ButtonModule,
  InputTextModule,
  InputTextareaModule,
  TabViewModule,
  PasswordModule
} from 'primeng/primeng';

@NgModule({
  declarations: [PersonalComponent],
  exports: [PersonalComponent],

  imports: [
    CommonModule,
    PersonalRoutingModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    TabViewModule,
    PasswordModule
  ]
})
export class PersonalModule {}
