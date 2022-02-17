import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


import { HeroisRoutingModule } from './herois-routing.module';
import { HeroisComponent } from './herois.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [HeroisComponent],
  imports: [
    CommonModule,
    HeroisRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    SharedModule
  ]
})
export class HeroisModule { }
