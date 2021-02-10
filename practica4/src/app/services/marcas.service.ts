import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  private URL:string = `http://localhost:5000/api/marcas`;

  constructor( private http:HttpClient ) { }

  getMarcas() {
    return this.http.get<any[]>( this.URL );
  }
}
