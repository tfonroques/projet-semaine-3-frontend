import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { JWTTokenService } from '../jwt-token.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(public auth: AuthService, jwt: JWTTokenService) {}

  ngOnInit(): void {
    console.log('current user', this.auth.currentUserValue);
    console.log('');
  }
}
