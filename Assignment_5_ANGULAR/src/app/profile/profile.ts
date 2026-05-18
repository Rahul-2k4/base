import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  user: any;

  constructor(private router: Router) {

    this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');

  }

  logout() {

    localStorage.removeItem('currentUser');

    this.router.navigate(['/login']);
  }

}