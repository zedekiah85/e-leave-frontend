// src/app/hr/hr.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { HrService } from './hr.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'leave-management', component: LeaveManagementComponent }
    ]),
    LeaveManagementComponent
  ],
  providers: [HrService]
})
export class HRModule { }
