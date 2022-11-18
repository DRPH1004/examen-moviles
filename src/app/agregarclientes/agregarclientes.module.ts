import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarclientesPageRoutingModule } from './agregarclientes-routing.module';

import { AgregarclientesPage } from './agregarclientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarclientesPageRoutingModule
  ],
  declarations: [AgregarclientesPage]
})
export class AgregarclientesPageModule {}
