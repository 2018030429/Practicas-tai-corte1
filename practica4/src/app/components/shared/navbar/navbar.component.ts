import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor( private router: Router ) { }

  public buscarProducto(texto:string):void {
    if (texto.length < 3) return;
    this.router.navigate(['product/search', texto]);
  }

}
