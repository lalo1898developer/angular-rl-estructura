import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteUnoComponent, ComponenteDosComponent } from './components';
import { ModuloHijoRoutingModule } from './modulo-hijo-routing.module';

@NgModule({
  declarations: [
    ComponenteUnoComponent,
    ComponenteDosComponent,
  ],
  imports: [
    ModuloHijoRoutingModule,
    CommonModule
  ]
})
export class ModuloHijoModule { }
