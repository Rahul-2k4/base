import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  name = '';
  email = '';
  password = '';

  constructor(private router: Router) {}

  register() {

    let users = JSON.parse(localStorage.getItem('users') || '[]');

    let user = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));

    alert("Registration Successful");

    this.router.navigate(['/login']);
  }

}