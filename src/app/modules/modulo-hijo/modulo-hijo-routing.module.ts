import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteUnoComponent, ComponenteDosComponent } from './components'

const routes: Routes = [
  { path: 'nuevo', component:  ComponenteUnoComponent },
  { path: 'nuevodos', component:  ComponenteDosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloHijoRoutingModule { }
