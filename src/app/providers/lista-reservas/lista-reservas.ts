import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Reserva} from '../../clases/reserva';

/*
  Generated class for the ListaReservasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaReservasProvider {

  reservas:Reserva[] = [];

  constructor() {
  }

  //LOCALSTORAGE
  actualizarData(){
    localStorage.setItem("data",JSON.stringify(this.reservas));
  }

  cargarData(){
    if(localStorage.getItem("data")){
      this.reservas = JSON.parse(localStorage.getItem("data"));
    }

  }

  agregarData(reserva:Reserva){
    this.reservas.push(reserva);
    this.actualizarData();
    console.log(this.reservas);
  }


}
