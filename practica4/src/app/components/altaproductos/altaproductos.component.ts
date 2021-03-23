import { Component, OnInit } from '@angular/core';

// Servicios
import { ProductosService } from '@services/productos.service';

// Modelos
import { Producto } from '@models/Product.model';

@Component({
  selector: 'app-altaproductos',
  templateUrl: './altaproductos.component.html',
  styleUrls: ['./altaproductos.component.css']
})
export class AltaproductosComponent implements OnInit {

  public ProductList:Producto[];

  constructor( private PruductService:ProductosService ) { }

  ngOnInit(): void {
    this.getProductsList();
  }

  private async getProductsList():Promise<void> {
    this.ProductList = await this.PruductService.getProducts().toPromise();
  }

  public showDetailsProduct( product:Producto ) {
    console.table(product);
  }

  public updateProduct( product:Producto ) {
    console.table(product);
  }

  public deleteProduct( product:Producto ) {
    console.table(product);
  }

}
