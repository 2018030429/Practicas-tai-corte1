import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private http:HttpClient ) {
    console.log('Hola bb');
  }

  get() {
    console.log("Yo soy el camaleón");
  }

}
