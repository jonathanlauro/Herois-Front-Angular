import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViloesComponent } from './modules/viloes/viloes.component';

const routes: Routes = [
  { path: 'herois', loadChildren: () => import('./modules/herois/herois.module').then(m => m.HeroisModule) },
  { path: 'viloes', loadChildren: () => import('./modules/viloes/viloes.module').then(m => m.ViloesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
