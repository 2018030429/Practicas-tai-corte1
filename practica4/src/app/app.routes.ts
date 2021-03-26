import { RouterModule, Routes } from '@angular/router';

// Componentes
import { HomeComponent } from '@com/home/home.component';
import { LoginComponent } from '@com/login/login.component';
import { AboutComponent } from '@com/about/about.component';
import { MarcasComponent } from '@com/marcas/marcas.component';
import { ProductComponent } from '@com/product/product.component';
import { ProductsComponent } from '@com/products/products.component';
import { BusquedaComponent } from '@com/busqueda/busqueda.component';
import { AltaproductosComponent } from '@com/altaproductos/altaproductos.component';

// Guardianes
import { AuthGuard } from '@services/auth.guard';

const app_routes: Routes = [
    { path:'home', component:HomeComponent },
    { path:'about', component:AboutComponent },
    { path:'login', component: LoginComponent },
    { path:'marcas', component:MarcasComponent },
    { path:'products', component:ProductsComponent },
    { 
        path:'alta', component:AltaproductosComponent, 
        canActivate: [ AuthGuard ]
    },
    { path:'product/:id', component:ProductComponent },
    { path:'product/search/:texto', component:BusquedaComponent },
    { path:'**', pathMatch: 'full', redirectTo: 'home' }
];

export const App_routing = RouterModule.forRoot( app_routes );
