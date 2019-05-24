import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalComponent } from './personal.component';

@NgModule({
  declarations: [PersonalComponent],
  imports: [
    CommonModule,
    PersonalRoutingModule
  ]
})
export class PersonalModule { }
