import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  ListProductos:Producto[] = [];

  constructor( private servicioProductos:ProductosService ) { }

  async ngOnInit() {
    // Opción 1 
    // this.servicioProductos.get().subscribe(
    //   (data:any) => this.ListProductos = data
    // );

    // Opción 2
    this.ListProductos = await this.servicioProductos.get().toPromise();
    console.log(this.ListProductos);
  }
}

interface Producto {
  id:          number;
  nombre:      string;
  descripcion: string;
  precio:      number;
  imgSrc:      string;
}
