import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialHomePageRoutingModule } from './social-home-routing.module';

import { SocialHomePage } from './social-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialHomePageRoutingModule
  ],
  declarations: [SocialHomePage]
})
export class SocialHomePageModule {}
