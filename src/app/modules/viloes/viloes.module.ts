import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViloesRoutingModule } from './viloes-routing.module';
import { ViloesComponent } from './viloes.component';


@NgModule({
  declarations: [ViloesComponent],
  imports: [
    CommonModule,
    ViloesRoutingModule
  ]
})
export class ViloesModule { }
