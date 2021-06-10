import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { DondeEstamosComponent } from './componentes/donde-estamos/donde-estamos.component';
import { DetalleInstrumentoComponent } from './componentes/detalle-instrumento/detalle-instrumento.component';
import { InstrumentosComponent } from './componentes/instrumentos/instrumentos.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AgregarInstrumentoComponent } from './componentes/agregar-instrumento/agregar-instrumento.component';
import { EditarComponent } from './componentes/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DondeEstamosComponent,
    DetalleInstrumentoComponent,
    InstrumentosComponent,
    BuscadorComponent,
    NavbarComponent,
    AgregarInstrumentoComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
