import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarproductosPage } from './editarproductos.page';

const routes: Routes = [
  {
    path: '',
    component: EditarproductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarproductosPageRoutingModule {}
