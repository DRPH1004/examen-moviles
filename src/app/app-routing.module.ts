import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'editarproductos',
    loadChildren: () => import('./editarproductos/editarproductos.module').then( m => m.EditarproductosPageModule)
  },
  {
    path: 'nuevoproducto',
    loadChildren: () => import('./nuevoproducto/nuevoproducto.module').then( m => m.NuevoproductoPageModule)
  },
  {
    path: 'menuprincipal',
    loadChildren: () => import('./menuprincipal/menuprincipal.module').then( m => m.MenuprincipalPageModule)
  },
  {
    path: 'agregarproducto',
    loadChildren: () => import('./agregarproducto/agregarproducto.module').then( m => m.AgregarproductoPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  
  {
    path: 'agregarclientes',
    loadChildren: () => import('./agregarclientes/agregarclientes.module').then( m => m.AgregarclientesPageModule)
  },
  {
    path: 'editarclientes',
    loadChildren: () => import('./editarclientes/editarclientes.module').then( m => m.EditarclientesPageModule)
  },
  {
    path: 'vender',
    loadChildren: () => import('./vender/vender.module').then( m => m.VenderPageModule)
  },
  {
    path: 'reportes',
    loadChildren: () => import('./reportes/reportes.module').then( m => m.ReportesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
