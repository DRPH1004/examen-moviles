import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarclientesPageRoutingModule } from './editarclientes-routing.module';

import { EditarclientesPage } from './editarclientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarclientesPageRoutingModule
  ],
  declarations: [EditarclientesPage]
})
export class EditarclientesPageModule {}
