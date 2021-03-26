import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";

// Servicios
import { ProductosService } from '@services/productos.service';

// Modelos
import { Producto } from '@models/Product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public producto:Producto;
  public isLoading:boolean = true;

  constructor( private activatedRoute: ActivatedRoute,
               private servicioProductos: ProductosService,
               private location: Location ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( async ({ id }) => {
      this.producto = await this.servicioProductos.getProduct( id ).toPromise();
      this.isLoading = false;
    });
  }

  backPage():void {
    this.location.back();
  }

}
