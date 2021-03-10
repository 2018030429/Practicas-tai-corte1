import { Component, Input, Output, EventEmitter } from '@angular/core';

// Modelos
import { Producto } from '@models/Product.model';

@Component({
  selector: 'app-tarjeta-productos',
  templateUrl: './tarjeta-productos.component.html',
  styleUrls: ['./tarjeta-productos.component.css']
})
export class TarjetaProductosComponent {

  @Input() public producto:Producto;
  @Output() public productoSeleccionado:EventEmitter<number>;

  constructor() {
    this.productoSeleccionado = new EventEmitter();
  }

  verProducto(id: number):void {
    this.productoSeleccionado.emit( id );
  }

}
