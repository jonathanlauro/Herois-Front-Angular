import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViloesComponent } from './viloes.component';

const routes: Routes = [{ path: '', component: ViloesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViloesRoutingModule { }
