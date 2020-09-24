import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesionalHomePage } from './profesional-home.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesionalHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesionalHomePageRoutingModule {}
