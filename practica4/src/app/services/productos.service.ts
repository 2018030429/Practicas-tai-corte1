import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public URL:string = `http://localhost:5000/api/productos`;

  constructor( private http:HttpClient ) {}

  get() {
    return this.http.get<any[]>( this.URL );
  }

}
