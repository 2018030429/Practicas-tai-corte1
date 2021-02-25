import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from '../shared/models/Product.model';

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
      this.producto = await this.servicioProductos.getOne( id ).toPromise();
      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
      console.table(this.producto);
    });
  }

}
