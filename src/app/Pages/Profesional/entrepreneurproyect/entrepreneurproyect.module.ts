import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrepreneurproyectPageRoutingModule } from './entrepreneurproyect-routing.module';

import { EntrepreneurproyectPage } from './entrepreneurproyect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrepreneurproyectPageRoutingModule
  ],
  declarations: [EntrepreneurproyectPage]
})
export class EntrepreneurproyectPageModule {}
