import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  register() {
    this.authService
      .register(this.username, this.password)
      .subscribe((data) => {
        this.username = '';
        this.password = '';
      });
  }
}
