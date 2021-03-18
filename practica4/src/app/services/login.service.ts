import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

// Modelos
import { Usuario } from '@models/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private EndPoint:string = `http://localhost:5000/api/login`;

  constructor( private http:HttpClient ) { }

  public logIn(usuario:Usuario):Observable<Object> {
    return this.http.post<Object>( this.EndPoint, usuario );
  }

}
