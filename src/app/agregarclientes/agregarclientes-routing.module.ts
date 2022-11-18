import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarclientesPage } from './agregarclientes.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarclientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarclientesPageRoutingModule {}
