import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntrepreneurproyectPage } from './entrepreneurproyect.page';

const routes: Routes = [
  {
    path: '',
    component: EntrepreneurproyectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrepreneurproyectPageRoutingModule {}
