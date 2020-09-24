import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialproyectPageRoutingModule } from './socialproyect-routing.module';

import { SocialproyectPage } from './socialproyect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialproyectPageRoutingModule
  ],
  declarations: [SocialproyectPage]
})
export class SocialproyectPageModule {}
