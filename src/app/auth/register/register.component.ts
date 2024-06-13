import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({                                                                                                                                                                                    
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],

})
export class RegisterComponent {
  registerData = { username: '', password: '', confirmPassword: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    this.authService.register(this.registerData).subscribe(response => {
      if (response.success) {
        this.router.navigate(['/auth/login']);  // Redirect to login page after successful registration
      } else {
        alert('Registration failed');
      }
    }, error => {
      console.error('Registration error', error);
      alert('An error occurred during registration');
    });
  }
}
