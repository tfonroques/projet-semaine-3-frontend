import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  signUp(f: NgForm) {
    this.userService.signUp(f.form.value).subscribe(
      (res) => {
        console.log('res', res);
      },
      (error) => console.log('error', error)
    );
  }
}
