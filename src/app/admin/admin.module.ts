// src/app/admin/admin.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SystemSettingsComponent } from './system-settings/system-settings.component';
import { AdminService } from './admin.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'system-settings', component: SystemSettingsComponent }
    ]),
    SystemSettingsComponent
  ],
  providers: [AdminService]
})
export class AdminModule { }
