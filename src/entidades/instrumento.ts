export class Instrumento {
  id: string;
  instrumento : string;
  marca: string;
  modelo: string;
  imagen: string;
  precio: number;
  costo_envio: string;
  cantidad_vendida: number;
  descripcion: string;

  constructor(_id: string, _instrumento: string, _marca: string, _modelo:string, _imagen:string, _precio: number, _costo_envio: string, _cantidad_vendida: number, _descripcion: string){
    this.id = _id;
    this.instrumento = _instrumento;
    this.marca = _marca;
    this.modelo = _modelo;
    this.imagen = _imagen;
    this.precio = _precio;
    this.costo_envio = _costo_envio;
    this.cantidad_vendida = _cantidad_vendida;
    this.descripcion = _descripcion;
  }


}
