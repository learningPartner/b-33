import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, UserRole } from '../../services/auth-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  selectedRole: UserRole = 'Employee';
  userCode = '';
  loginError = '';
  password = '';

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  onLogin() {
    if(this.userCode == "111" && this.password == "1122") {
       this.router.navigateByUrl('/adminpage');
      localStorage.setItem('loggedUserRole','SuperAdmin')
    } else if(this.userCode == "222" && this.password == "1122") {
      this.router.navigateByUrl('category');
      localStorage.setItem('loggedUserRole','Employee')
    } else if(this.userCode == "333" && this.password == "1122") {
      localStorage.setItem('loggedUserRole','Guest')
       this.router.navigateByUrl('/rxjs');
    } else {
      alert("wreong pwd")
    }

    
   
  }
}
