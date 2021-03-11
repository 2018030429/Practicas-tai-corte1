import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Modelos
import { Producto } from "@models/Product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private EndPoint:string = `http://localhost:5000/api/productos`;

  constructor( private http:HttpClient ) {}

  public getProducts():Observable<Producto[]> {
    return this.http.get<Producto[]>( this.EndPoint );
  }

  public getProduct( id:number ):Observable<Producto> {
    return this.http.get<Producto>(`${ this.EndPoint }/${ id }`);
  }

  public getProductsByName( texto:string ):Observable<Producto[]> {
    return this.http.get<Producto[]>(`${ this.EndPoint }/buscar/${ texto }`);
  }

}
