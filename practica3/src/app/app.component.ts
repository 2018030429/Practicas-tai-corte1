import { Component, ViewChild } from '@angular/core';
import { SelectorNumericoComponent } from './selector-numerico/selector-numerico.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild('selector2') selector2: SelectorNumericoComponent;

  public valor1:number;
  public valor2:number;
  public valor3:number;
  public resultado:string;

  mensaje = ''

  retornoAleatorio() {
    return Math.trunc( Math.random()*6 ) + 1;
  }

  tirar() {
    this.valor1 = this.retornoAleatorio();
    this.valor2 = this.retornoAleatorio();
    this.valor3 = this.retornoAleatorio();

    this.valor1 === this.valor2 && this.valor2 === this.valor3
      ? this.resultado = 'Ha gandado!!!'
      : this.resultado = 'Ha perdido!!!'
  }

  actualizar( tiempo ) {
    this.mensaje = `${ tiempo }  ( Se actualiza cada 10 seg. )`;
  }

  fijarSelector( valor:number ) {
    this.selector2.fijar( valor );
  }

}
