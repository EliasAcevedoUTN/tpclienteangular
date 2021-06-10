import { InstrumentoService } from './../../servicios/instrumento.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-agregar-instrumento',
  templateUrl: './agregar-instrumento.component.html',
  styleUrls: ['./agregar-instrumento.component.css']
})
export class AgregarInstrumentoComponent implements OnInit {


  instrumento = {
    instrumento : '',
    marca : '',
    modelo : '',
    imagen : '',
    precio : '',
    costo_envio : '',
    cantidad_vendida : '',
    descripcion : ''
  }

  constructor(private instrumentoServicio : InstrumentoService) {

  }

  ngOnInit(): void {
  }

  agregarInstrumento(){
    this.instrumentoServicio.agrergarInstrumento(this.instrumento);
    window.location.href='/instrumentos';
  }

}
