import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatecampPage } from './createcamp.page';

const routes: Routes = [
  {
    path: '',
    component: CreatecampPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatecampPageRoutingModule {}
