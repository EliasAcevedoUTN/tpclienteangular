import { Instrumento } from './../../../entidades/instrumento';
import { InstrumentoService } from './../../servicios/instrumento.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-instrumentos',
  templateUrl: './instrumentos.component.html',
  styleUrls: ['./instrumentos.component.css']
})
export class InstrumentosComponent implements OnInit {

  instrumentosFile : Instrumento[] = [];

  constructor(private servicioInstrumento : InstrumentoService, private router: Router) {
  }

  ngOnInit(): void {
    this.servicioInstrumento.getInstrumentosBD().then(datos => {
      this.instrumentosFile = datos;
    });
    console.log(this.instrumentosFile)
  }

  public verInstrumento(idInstrumento:string){
    this.router.navigate(['/detalleInstrumentos', idInstrumento]);
  }
}
