import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  loginData = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.loginData).subscribe(response => {
      if (response.success) {
        this.router.navigate(['/employee']); // redirect to employee dashboard or other appropriate page
      } else {
        alert('Login failed');
      }
    }, error => {
      console.error('Login error', error);
      alert('An error occurred during login');
    });
  }
}
