import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'http://localhost:3000/api/payment'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}


  // Method to get payment requests for finance review
  getPaymentRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/requests`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Method to review a payment request
  reviewPaymentRequest(requestId: string, approval: string, comments: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/review`, { requestId, approval, comments })
      .pipe(
        catchError(this.handleError)
      );
  }
  processPayment(paymentRequest: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/process`, paymentRequest)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Error handling method
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    throw error;
  }
}
