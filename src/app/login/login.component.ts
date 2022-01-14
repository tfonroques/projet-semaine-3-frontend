import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  login(f: NgForm) {
    console.log('forms value', f.form.value);
    this.auth.login(f.form.value).subscribe(
      (res) => console.log('res', res),
      (error) => console.log('error : ', error)
    );
  }

  logout() {
    this.auth.logout();
  }
}
