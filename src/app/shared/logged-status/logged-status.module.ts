import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedStatusComponent } from './logged-status.component';
import { LoggedStatusService } from './logged-status.service';

@NgModule({
  declarations: [LoggedStatusComponent],
  providers: [LoggedStatusService],
  exports: [LoggedStatusComponent],
  imports: [CommonModule]
})
export class LoggedStatusModule {}
