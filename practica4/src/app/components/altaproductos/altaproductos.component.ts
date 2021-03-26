import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

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
  public frmProduct:FormGroup;

  constructor( private PruductService:ProductosService,
               private builder:FormBuilder,
               private router:Router ) { 
    
    this.frmProduct = this.builder.group({
      nombre: ['', [Validators.required]],
      precio: [0, [Validators.required]],
      descripcion: ['', [Validators.required]]
    });
    
  }

  ngOnInit(): void {
    this.getProductsList();
  }

  private async getProductsList():Promise<void> {
    this.ProductList = await this.PruductService.getProducts().toPromise();
  }

  public showDetailsProduct( product:Producto ) {
    this.router.navigate(['/product', product]);
  }

  public updateProduct( product:Producto ) {
    console.table(product);
  }

  public deleteProduct( product:Producto ) {
    console.table(product);
  }

}
