import { EditarComponent } from './componentes/editar/editar.component';
import { AgregarInstrumentoComponent } from './componentes/agregar-instrumento/agregar-instrumento.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { DetalleInstrumentoComponent } from './componentes/detalle-instrumento/detalle-instrumento.component';
import { InstrumentosComponent } from './componentes/instrumentos/instrumentos.component';
import { DondeEstamosComponent } from './componentes/donde-estamos/donde-estamos.component';
import { HomeComponent } from './componentes/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'dondeEstamos', component : DondeEstamosComponent},
  {path : 'instrumentos', component : InstrumentosComponent},
  {path: 'detalleInstrumentos/:id', component : DetalleInstrumentoComponent},
  {path: 'buscar/:termino', component : BuscadorComponent},
  {path: 'agregarInstrumento', component : AgregarInstrumentoComponent},
  {path : 'editar/:id', component : EditarComponent},
  {path : '**', pathMatch: 'full', redirectTo : 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
