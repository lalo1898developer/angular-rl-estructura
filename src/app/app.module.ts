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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
