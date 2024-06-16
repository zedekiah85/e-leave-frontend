// src/app/employee/employee.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { LeaveBalanceComponent } from './leave-balance/leave-balance.component';
import { LeaveService } from './leave.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'leave-request', component: LeaveRequestComponent },
      { path: 'leave-balance', component: LeaveBalanceComponent }
    ]),
    LeaveRequestComponent,
    LeaveBalanceComponent
  ],
  providers: [
    LeaveService,
    provideHttpClient(withFetch())

  ]
})
export class EmployeeModule { }
