import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
               private servicioProductos: ProductosService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( async ({ id }) => {
      this.producto = await this.servicioProductos.getProduct( id ).toPromise();
      this.isLoading = false;
    });
  }

}
