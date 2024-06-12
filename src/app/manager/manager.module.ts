// src/app/manager/manager.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LeaveApprovalComponent } from './leave-approval/leave-approval.component';
import { LeaveService } from './leave.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'leave-approval', component: LeaveApprovalComponent }
    ]),
    LeaveApprovalComponent
  ],
  providers: [LeaveService]
})
export class ManagerModule { }
