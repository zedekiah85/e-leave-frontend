
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-leave-request',
  standalone: true,
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css'],
  imports: [FormsModule]
})
export class LeaveRequestComponent {
  leaveRequestForm: FormGroup;
  loading = false;
  error = '';
leaveType: any;
startDate: any;
endDate: any;
reason: any;

  constructor(
    private formBuilder: FormBuilder,
    private leaveService: LeaveService,
    private router: Router
  ) {
    this.leaveRequestForm = this.formBuilder.group({
      leaveType: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reason: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.leaveRequestForm.invalid) {
      return;
    }

    this.loading = true;
    this.error = '';

    const { leaveType, startDate, endDate, reason } = this.leaveRequestForm.value;

    // Call the leave service to submit the leave request
    this.leaveService.submitLeaveRequest(leaveType, startDate, endDate, reason).subscribe(
      () => {
        this.loading = false;
        // Navigate to leave balance or dashboard page after successful submission
        this.router.navigate(['/employee/leave-balance']);
      },
      (error) => {
        this.loading = false;
        this.error = 'Failed to submit leave request. Please try again.';
        console.error('Error submitting leave request:', error);
      }
    );
  }
}

