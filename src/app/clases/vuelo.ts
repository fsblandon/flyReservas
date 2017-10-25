export class Vuelo{
  numero:number;
  origen:string;
  destino:string;
  fecha:string;
  horaInicio:string;
  horaFin:string;
  precio:number;
  reserva:string;

  constructor(numero:number,
              horaInicio:string,
              horaFin:string,
              precio:number,
              reserva:string){
    this.numero = numero;
    this.origen = "bogota";
    this.destino = "cartagena";
    this.fecha = "25/05/2017";
    this.horaInicio = horaInicio;
    this.horaFin = horaFin;
    this.precio = precio;
    this.reserva = reserva;
  }
}
