// src/app/finance/finance.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { PaymentProcessingComponent } from './payment-processing/payment-processing.component';
import { FinanceReviewComponent } from './finance-review/finance-review.component';
import { FinanceDashboardComponent } from './finance-dashboard/finance-dashboard.component';
import { PaymentService } from './payment.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'payment-management', component: PaymentProcessingComponent },
      { path: 'review', component: FinanceReviewComponent },
      { path: 'finance-dashboard', component: FinanceDashboardComponent }
    ]),
    PaymentProcessingComponent
  ],
  providers: [
    PaymentService,
    provideHttpClient(withFetch())
  ]
})
export class FinanceModule { }
