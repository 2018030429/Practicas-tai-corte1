import { RouterModule, Routes } from '@angular/router';

// Componentes
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ProductsComponent } from './components/products/products.component';

const app_routes: Routes = [
    { path:'home', component:HomeComponent },
    { path:'about', component:AboutComponent },
    { path:'marcas', component:MarcasComponent },
    { path:'products', component:ProductsComponent },
    { path:'**', pathMatch: 'full', redirectTo: 'home' }
];

export const App_routing = RouterModule.forRoot( app_routes );
