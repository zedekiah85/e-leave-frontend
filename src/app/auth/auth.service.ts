import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://your-backend-api-url/api/auth'; // replace with your actual API URL

  constructor(private http: HttpClient) {}

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      map(response => {
        if (response.success) {
          localStorage.setItem('token', response.token); // store the token in localStorage
        }
        return response;
      })
    );
  }
  register(userData: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, userData).pipe(
      map(response => response)
    );
  }
  getEmployeeId(): string {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const employeeId = user?.id;

    if (!employeeId) {
      throw new Error('Employee ID not found');
    }

    return employeeId;
  }
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
