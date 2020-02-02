import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PessoasAddPageRoutingModule } from './pessoas-add-routing.module';

import { PessoasAddPage } from './pessoas-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PessoasAddPageRoutingModule
  ],
  declarations: [PessoasAddPage]
})
export class PessoasAddPageModule {}
