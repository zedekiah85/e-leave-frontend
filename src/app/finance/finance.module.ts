// src/app/finance/finance.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PaymentProcessingComponent } from './payment-processing/payment-processing.component';
import { PaymentService } from './payment.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'payment-management', component: PaymentProcessingComponent }
    ]),
    PaymentProcessingComponent
  ],
  providers: [PaymentService]
})
export class FinanceModule { }
