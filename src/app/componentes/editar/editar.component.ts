import { ActivatedRoute } from '@angular/router';
import { InstrumentoService } from './../../servicios/instrumento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

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

  idInstrumento = "";
  constructor(private servicioInstrumento: InstrumentoService, private activeRoute : ActivatedRoute) {
    this.activeRoute.params.subscribe(parametros =>{
      this.servicioInstrumento.getInstrumentoBD(parametros['id']).then(datos=>{
        this.instrumento = datos[0];
        this.idInstrumento = parametros['id'];
        console.log(datos);
      })
    })
  }

  ngOnInit(): void {
  }

  editarInstrumento(){
    this.servicioInstrumento.editarInstrumento(this.instrumento, this.idInstrumento);
    window.location.href = 'detalleInstrumentos/' + this.idInstrumento;
  }

}
