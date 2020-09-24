import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesionalHomePageRoutingModule } from './profesional-home-routing.module';

import { ProfesionalHomePage } from './profesional-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesionalHomePageRoutingModule
  ],
  declarations: [ProfesionalHomePage]
})
export class ProfesionalHomePageModule {}
