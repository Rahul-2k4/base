import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {

    let users = JSON.parse(localStorage.getItem('users') || '[]');

    let foundUser = users.find((u: any) =>
      u.email == this.email &&
      u.password == this.password
    );

    if(foundUser) {

      localStorage.setItem('currentUser', JSON.stringify(foundUser));

      alert("Login Successful");

      this.router.navigate(['/profile']);
    }

    else {

      alert("Invalid Email or Password");

    }

  }

}