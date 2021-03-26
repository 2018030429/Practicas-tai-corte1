import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Servicios
import { LoginService } from '@services/login.service';

// Modelos
import { Usuario } from '@models/Usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public errorMessage:string;
  public isBadRequest:boolean = false;

  public login:Usuario = {
    username: null,
    password: null
  }

  constructor( private LoginService:LoginService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  public async singUp() {
    try {
      let response = await this.LoginService.logIn(this.login).toPromise();
      this.LoginService.setSession = true;
      this.router.navigate(['alta']);
    } catch (error) {
      this.errorMessage = error.error;
      this.isBadRequest = true;
    }
  }
}
