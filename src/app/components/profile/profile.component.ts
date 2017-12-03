import { Component } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  current = JSON.parse(localStorage.getItem('currentUser'));
  constructor(public router: Router) { }

}
