import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  hide = true;
  login_form_group = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  constructor() { }

  ngOnInit(): void {
  }

  get username() {
    return this.login_form_group.get('username');
  }

  get password() {
    return this.login_form_group.get('password');
  }

  save_user(): void {
    if(!sessionStorage.getItem('user')){
      sessionStorage.setItem('user', this.login_form_group.value.username);
    }
  }

}
