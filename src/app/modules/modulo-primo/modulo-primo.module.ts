import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloPrimoRoutingModule } from './modulo-primo-routing.module';

import { ComponenteUnoComponent } from './components';


@NgModule({
  declarations: [
    ComponenteUnoComponent
  ],
  imports: [
    CommonModule,
    ModuloPrimoRoutingModule
  ]
})
export class ModuloPrimoModule { }
