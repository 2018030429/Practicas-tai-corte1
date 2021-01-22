import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DadoComponent } from './dado/dado.component';
import { Dado2Component } from './dado2/dado2.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { SelectorNumericoComponent } from './selector-numerico/selector-numerico.component';

@NgModule({
  declarations: [
    AppComponent,
    DadoComponent,
    Dado2Component,
    CronometroComponent,
    SelectorNumericoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
