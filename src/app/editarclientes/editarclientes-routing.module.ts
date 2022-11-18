import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarclientesPage } from './editarclientes.page';

const routes: Routes = [
  {
    path: '',
    component: EditarclientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarclientesPageRoutingModule {}
