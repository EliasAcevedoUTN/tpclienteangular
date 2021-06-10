import { Injectable } from '@angular/core';
import * as data from 'src/assets/datos/instrumentos.json';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class InstrumentoService {

  instrumentosFile : any = (data as any).default;

  constructor( ) {
    console.log("servicio cargado con exito!!");
    // console.log(this.instrumentosFile);
  }

  public getInstrumentos():any[]{
    return this.instrumentosFile.instrumentos;
  }

  public async getInstrumentosBD(){
    const datos = await fetch("http://localhost:4000/instrumentos");
    const datosJson = datos.json();
    return datosJson;
  }

  public getInstrumentoxId(id: string):any{
    for (let instrumento of this.instrumentosFile.instrumentos){
      if (instrumento.id == id){
        return instrumento;
      }
    }
  }

  public async getInstrumentoBD(id: string){
    const datos = await fetch("http://localhost:4000/instrumentos/" + id);
    const datosJson = datos.json();
    return datosJson;
  }

  public buscarInstrumento(termino:string):any[]{
    let instrumentoArreglo:any[] = [];
    termino = termino.toLowerCase();
    for (let instrumento of this.instrumentosFile){
      let nombre = instrumento.instrumento.toLowerCase();
      if (nombre.indexOf(termino) >= 0){
        instrumentoArreglo.push(instrumento);
      }
    }
    return instrumentoArreglo;
  }

  public eliminarInstrumento(id:string){
    axios.delete("http://localhost:4000/delete/" + id).then((res)=>{
      console.log(res);
    })
  }

  public agrergarInstrumento(instrumento : any){
    axios.post("http://localhost:4000/insertar", instrumento).then((res)=>{
      console.log(res);
    })
  }

  public editarInstrumento(instrumento:any, id:string){
    axios.put("http://localhost:4000/update/" + id, instrumento).then(data=>{
      console.log(data);
    })
  }
}
