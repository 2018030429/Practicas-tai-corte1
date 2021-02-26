import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from '../shared/models/Product.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  public ListProductos: Producto[];
  public texto:string;

  constructor( private router: Router,
               private activeRoute: ActivatedRoute,
               private ProductService: ProductosService ) { }

  ngOnInit() {
    this.getProductoNombre();
  }

  getProductoNombre() {
    this.activeRoute.params.subscribe( async ({ texto }) => {
      this.texto = texto;
      this.ListProductos = await this.obtenerProducto( texto );
    });
  }

  async obtenerProducto( texto:string ):Promise<any> {
    return await this.ProductService.getItems(texto).toPromise();
  }

  verProducto(id: number):void {
    this.router.navigate(['/product', id ]);
  }

}
