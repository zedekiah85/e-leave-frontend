import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../leave.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  leaveBalance: any;
  leaveRequests: any[] = [];
  error: string = '';

  constructor(
    private leaveService: LeaveService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.fetchLeaveBalance();
    this.fetchLeaveRequests();
  }

  fetchLeaveBalance(): void {
    const employeeId = this.authService.getEmployeeId();
    this.leaveService.getLeaveBalance(employeeId).subscribe(
      (data) => {
        this.leaveBalance = data;
      },
      (error) => {
        this.error = 'Failed to load leave balance.';
        console.error('Error loading leave balance:', error);
      }
    );
  }

  fetchLeaveRequests(): void {
    const employeeId = this.authService.getEmployeeId();
    this.leaveService.getLeaveRequests(employeeId).subscribe(
      (data) => {
        this.leaveRequests = data;
      },
      (error) => {
        this.error = 'Failed to load leave requests.';
        console.error('Error loading leave requests:', error);
      }
    );
  }
}
