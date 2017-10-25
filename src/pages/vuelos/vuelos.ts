import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Vuelo} from '../../app/clases/vuelo';

import {ReservarPage} from '../reservar/reservar';

@Component({
  selector: 'page-vuelos',
  templateUrl: 'vuelos.html'
})
export class VuelosPage {

  //reservarPage = ReservarPage;

  /*vuelos = [
    new Vuelo(1,"08:00","09:00",280000),
    new Vuelo(2,"09:00","10:00",275000),
    new Vuelo(3,"10:00","11:00",250000),
    new Vuelo(4,"11:00","12:00",220000),
    new Vuelo(5,"12:00","13:00",230000),
    new Vuelo(6,"13:00","14:00",210000),
    new Vuelo(7,"14:00","15:00",190000),
    new Vuelo(8,"15:00","16:00",195000),
    new Vuelo(9,"16:00","17:00",180000),
    new Vuelo(10,"17:00","18:00",185000)
  ];*/

  vuelos = [
    new Vuelo(1,"08:00","09:00",280000,"1a"),
    new Vuelo(2,"09:00","10:00",275000,"1b"),
    new Vuelo(3,"10:00","11:00",250000,"1c"),
    new Vuelo(4,"11:00","12:00",220000,"1d"),
    new Vuelo(5,"12:00","13:00",230000,"1e"),
    new Vuelo(6,"13:00","14:00",210000,"1f"),
    new Vuelo(7,"14:00","15:00",190000,"1g"),
    new Vuelo(8,"15:00","16:00",195000,"1h"),
    new Vuelo(9,"16:00","17:00",180000,"1i"),
    new Vuelo(10,"17:00","18:00",185000,"1j")
  ];

  //reserva:string="";

  constructor(public navCtrl: NavController) {
  }

  reservar(reserva){
    this.navCtrl.push(ReservarPage,{reserva});
    console.log(reserva);
  }
}
