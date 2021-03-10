import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

// Servicios
import { ProductosService } from '@services/productos.service';

// Modelos
import { Producto } from '@models/Product.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  public ListProductos: Producto[] = [];
  public texto:string;

  constructor( private router: Router,
               private activeRoute: ActivatedRoute,
               private ProductService: ProductosService ) { }

  ngOnInit() {
    this.getProductosPorNombre();
  }

  getProductosPorNombre():void {
    this.activeRoute.params.subscribe( async ({ texto }) => {
      this.texto = texto;
      this.ListProductos = await this.obtenerProductos( texto );
    });
  }

  async obtenerProductos( texto:string ):Promise<Producto[]> {
    return await this.ProductService.getProductsByName(texto).toPromise();
  }

  verProducto(id: number):void {
    this.router.navigate(['/product', id ]);
  }

}
