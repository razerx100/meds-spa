import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LoginService } from '../Services/login.service';
import { Auth_result } from '../interfaces/auth';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  hide = true;
  auth_result : Auth_result;
  login_form_group = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  constructor(private login_service: LoginService) { }

  ngOnInit(): void {
  }

  get username() {
    return this.login_form_group.get('username');
  }

  get password() {
    return this.login_form_group.get('password');
  }

  check_user(): void {
    this.login_service.check_user(this.username.value, this.password.value).subscribe(result => {
      this.auth_result = result;
      if(this.auth_result.Auth == "Successful"){
        document.cookie = `current_user=${this.username.value}`
      }
    });
  }
}
