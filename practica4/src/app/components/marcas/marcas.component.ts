import { Component, OnInit } from '@angular/core';

// Servicios
import { MarcasService } from '@services/marcas.service';

// Modelos
import { Marca } from '@models/Marca.model';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  public ListMarcas:Marca[] = [];

  constructor( private servicioMarcas:MarcasService ) { }

  async ngOnInit():Promise<any> {
    this.ListMarcas = await this.servicioMarcas.getMarcas().toPromise();
  }

}

