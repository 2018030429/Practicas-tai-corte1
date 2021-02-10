import { Component, OnInit } from '@angular/core';
import { MarcasService } from 'src/app/services/marcas.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  public ListMarcas:Marca[] = [];

  constructor( private servicioMarcas:MarcasService ) { }

  async ngOnInit() {
    this.ListMarcas = await this.servicioMarcas.getMarcas().toPromise();
  }

}

interface Marca {
  id:      number;
  nombre:  string;
  website: string;
  imgSrc:  string;
}

