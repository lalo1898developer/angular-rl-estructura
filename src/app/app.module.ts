import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { 
  HeaderComponent, 
  FooterComponent,
} from './components';

import {
  ModuloPrimoModule,
  ModuloHijoModule,
  ModuloHermanoModule
} from './modules';
import { EduardoModule } from './eduardo/eduardo.module';
import { Eduardo2Module } from './eduardo2/eduardo2.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    ModuloHijoModule,
    ModuloPrimoModule,
    ModuloHermanoModule,
    AppRoutingModule,
    ChartsModule,
    EduardoModule,
    Eduardo2Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
