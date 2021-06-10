import { InstrumentoService } from './../../servicios/instrumento.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-detalle-instrumento',
  templateUrl: './detalle-instrumento.component.html',
  styleUrls: ['./detalle-instrumento.component.css']
})
export class DetalleInstrumentoComponent implements OnInit {

  instrumento : any;


  constructor(private instrumentoServicio: InstrumentoService, private activatedRoute : ActivatedRoute, private router : Router) {
    //
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id'])
      // this.instrumento = this.instrumentoServicio.getInstrumentoxId(params['id']);
      this.instrumentoServicio.getInstrumentoBD(params['id']).then(datos=>{
        this.instrumento = datos;
        console.log(datos);
      })
    })
  }

  ngOnInit(): void {

  }

  eliminarInstrumento(id:string){
    let opcion = confirm("Seguro que desea eliminar el instrumento seleccionado?");
    if(opcion) {
      this.instrumentoServicio.eliminarInstrumento(id);
      window.location.href='/instrumentos';
    }
  }

  editarInstrumento(id:string) {
    this.router.navigate(['editar', id]);
  }

}
