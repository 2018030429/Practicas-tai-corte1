import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login = {
    username: null,
    password: null
  }

  constructor() { }

  ngOnInit(): void {
  }

  public singUp() {
    console.table(this.login);
  }
}
