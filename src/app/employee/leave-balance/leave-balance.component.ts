
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-leave-balance',
  standalone: true,
  templateUrl: './leave-balance.component.html',
  styleUrls: ['./leave-balance.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule ],
})
export class LeaveBalanceComponent implements OnInit {
  leaveBalances: any[] = [];
  paymentForm: FormGroup;
  loading = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private leaveService: LeaveService
  ) {
    this.paymentForm = this.formBuilder.group({
      amount: ['', [Validators.required, Validators.min(1)]],
      leaveType: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.fetchLeaveBalances();
  }

  fetchLeaveBalances(): void {
    // Replace 'employeeId' with actual employee ID
    const employeeId = 'employee123';
    this.leaveService.getLeaveRequests(employeeId).subscribe(
      (data) => {
        this.leaveBalances = data;
      },
      (error) => {
        this.error = 'Failed to fetch leave balances. Please try again.';
        console.error('Error fetching leave balances:', error);
      }
    );
  }

  onRequestPayment(): void {
    if (this.paymentForm.invalid) {
      return;
    }

    this.loading = true;
    this.error = '';

    const paymentRequest = {
      amount: this.paymentForm.value.amount,
      leaveType: this.paymentForm.value.leaveType
    };

    // Mock service call for demonstration purposes
    this.leaveService.requestPayment(paymentRequest).subscribe(
      () => {
        this.loading = false;
        // Handle successful payment request
        alert('Payment request submitted successfully.');
      },
      (error) => {
        this.loading = false;
        this.error = 'Failed to submit payment request. Please try again.';
        console.error('Error submitting payment request:', error);
      }
    );
  }
}

