import { RouterModule, Routes } from '@angular/router';

// Componentes
import { AboutComponent } from './components/about/about.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { HomeComponent } from './components/home/home.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';

const app_routes: Routes = [
    { path:'home', component:HomeComponent },
    { path:'about', component:AboutComponent },
    { path:'marcas', component:MarcasComponent },
    { path:'products', component:ProductsComponent },
    { path:'product/:id', component:ProductComponent },
    { path:'product/search/:texto', component:BusquedaComponent },
    { path:'**', pathMatch: 'full', redirectTo: 'home' }
];

export const App_routing = RouterModule.forRoot( app_routes );
