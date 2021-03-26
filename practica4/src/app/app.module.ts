import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

// Rutas
import { App_routing } from './app.routes';

// Servicios
import { ProductosService } from '@services/productos.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from '@com/shared/navbar/navbar.component';
import { HomeComponent } from '@com/home/home.component';
import { AboutComponent } from '@com/about/about.component';
import { ProductsComponent } from '@com/products/products.component';
import { MarcasComponent } from '@com/marcas/marcas.component';
import { ProductComponent } from '@com/product/product.component';
import { BusquedaComponent } from '@com/busqueda/busqueda.component';
import { TarjetaProductosComponent } from '@com/tarjeta-productos/tarjeta-productos.component';
import { LoginComponent } from '@com/login/login.component';
import { AltaproductosComponent } from '@com/altaproductos/altaproductos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    MarcasComponent,
    ProductComponent,
    BusquedaComponent,
    TarjetaProductosComponent,
    LoginComponent,
    AltaproductosComponent
  ],
  imports: [
    BrowserModule,
    App_routing,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
