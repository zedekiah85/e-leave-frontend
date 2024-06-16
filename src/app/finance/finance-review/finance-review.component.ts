
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-finance-review',
  standalone: true,
  templateUrl: './finance-review.component.html',
  styleUrls: ['./finance-review.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class FinanceReviewComponent implements OnInit {
  paymentRequests: any[] = [];
  selectedRequest: any = null;
  reviewForm: FormGroup;
  loading = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private PaymentService: PaymentService,
    private router: Router
  ) {
    this.reviewForm = this.formBuilder.group({
      approval: ['', Validators.required],
      comments: ['']
    });
  }

  ngOnInit(): void {
    this.loadPaymentRequests();
  }

  loadPaymentRequests(): void {
    this.PaymentService.getPaymentRequests().subscribe(
      (requests) => {
        this.paymentRequests = requests;
      },
      (error) => {
        console.error('Error loading payment requests:', error);
      }
    );
  }

  selectRequest(request: any): void {
    this.selectedRequest = request;
  }

  onSubmit(): void {
    if (this.reviewForm.invalid) {
      return;
    }

    this.loading = true;
    this.error = '';

    const { approval, comments } = this.reviewForm.value;

    this.PaymentService.reviewPaymentRequest(this.selectedRequest.id, approval, comments).subscribe(
      () => {
        this.loading = false;
        this.loadPaymentRequests();  // Refresh the list after reviewing
        this.selectedRequest = null; // Clear the selected request
      },
      (error) => {
        this.loading = false;
        this.error = 'Failed to review payment request. Please try again.';
        console.error('Error reviewing payment request:', error);
      }
    );
  }
}

