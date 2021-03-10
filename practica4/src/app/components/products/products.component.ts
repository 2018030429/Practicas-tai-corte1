import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Servicios
import { ProductosService } from '@services/productos.service';

// Modelos
import { Producto } from '@models/Product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public ListProductos:Producto[] = [];

  constructor( private servicioProductos:ProductosService,
               private router:Router ) { }

  async ngOnInit() {
    //* Opción 1 
    // this.servicioProductos.get().subscribe(
    //   (data:any) => this.ListProductos = data
    // );

    //* Opción 2
    this.ListProductos = await this.servicioProductos.getProducts().toPromise();
  }

  verProducto(id: number):void {
    this.router.navigate(['/product', id ]);
  }
}
