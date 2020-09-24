import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatecampPageRoutingModule } from './createcamp-routing.module';

import { CreatecampPage } from './createcamp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatecampPageRoutingModule
  ],
  declarations: [CreatecampPage]
})
export class CreatecampPageModule {}
