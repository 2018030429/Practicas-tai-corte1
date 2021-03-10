import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

// Modelos
import { Marca } from "@models/Marca.model";

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  private EndPoint:string = `http://localhost:5000/api/marcas`;

  constructor( private http:HttpClient ) { }

  getMarcas():Observable<Marca[]> {
    return this.http.get<Marca[]>( this.EndPoint );
  }
}
