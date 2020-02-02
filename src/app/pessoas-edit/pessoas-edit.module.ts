import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PessoasEditPageRoutingModule } from './pessoas-edit-routing.module';

import { PessoasEditPage } from './pessoas-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PessoasEditPageRoutingModule
  ],
  declarations: [PessoasEditPage]
})
export class PessoasEditPageModule {}
