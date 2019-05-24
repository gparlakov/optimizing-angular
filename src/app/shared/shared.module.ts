import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoggedStatusComponent } from './logged-status/logged-status.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [LoggedStatusComponent, MenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [LoggedStatusComponent, MenuComponent]
})
export class SharedModule {}
