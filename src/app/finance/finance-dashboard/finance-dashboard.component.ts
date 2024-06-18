import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-finance-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './finance-dashboard.component.html',
  styleUrls: ['./finance-dashboard.component.css']
})
export class FinanceDashboardComponent implements OnInit {
  paymentRequests: any[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.fetchPaymentRequests();
  }

  fetchPaymentRequests(): void {
    this.loading = true;
    this.paymentService.getPaymentRequests().subscribe(
      (data) => {
        this.paymentRequests = data;
        this.loading = false;
      },
      (error) => {
        this.error = 'Failed to load payment requests.';
        this.loading = false;
      }
    );
  }

  approvePayment(requestId: string): void {
    this.paymentService.approvePayment(requestId).subscribe(
      () => {
        this.fetchPaymentRequests();
      },
      (error) => {
        this.error = 'Failed to approve payment.';
        console.error('Error approving payment:', error);
      }
    );
  }

  rejectPayment(requestId: string): void {
    this.paymentService.rejectPayment(requestId).subscribe(
      () => {
        this.fetchPaymentRequests();
      },
      (error) => {
        this.error = 'Failed to reject payment.';
        console.error('Error rejecting payment:', error);
      }
    );
  }
}
