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
  private startedSession:boolean = false;

  constructor( private http:HttpClient ) { }

  public logIn(usuario:Usuario):Observable<Object> {
    return this.http.post<Object>( this.EndPoint, usuario );
  }
  
  public set setSession(v : boolean) {
    this.startedSession = v;
  }

  public get getSession():boolean {
    return this.startedSession;
  }
  
}
