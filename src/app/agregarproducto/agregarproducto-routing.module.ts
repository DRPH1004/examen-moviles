import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarproductoPage } from './agregarproducto.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarproductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarproductoPageRoutingModule {}
