import { Component } from '@angular/core';
import { Router } from "@angular/router";

// Servicios
import { LoginService } from '@services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor( private router: Router,
               private LoginService:LoginService ) { }

  public get currentSession() {
    return this.LoginService.getSession;
  }
  
  public buscarProducto(texto:string):void {
    if (texto.length < 3) return;
    this.router.navigate(['product/search', texto]);
  }

  public async logOut() {
    this.LoginService.setSession = false;
    this.router.navigate(['login']);
  }
  
}
