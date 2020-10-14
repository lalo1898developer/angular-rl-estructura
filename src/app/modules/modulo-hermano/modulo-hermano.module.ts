import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloHermanoRoutingModule } from './modulo-hermano-routing.module';
import { ComponenteUnoComponent } from './components';


@NgModule({
  declarations: [ComponenteUnoComponent],
  imports: [
    CommonModule,
    ModuloHermanoRoutingModule
  ]
})
export class ModuloHermanoModule { }
