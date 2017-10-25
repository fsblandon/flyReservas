import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

import {ListaReservasProvider} from '../../app/providers/lista-reservas/lista-reservas';

import {Reserva} from '../../app/clases/reserva';
import {Vuelo} from '../../app/clases/vuelo';


@Component({
  selector: 'page-reservas',
  templateUrl: 'reservas.html'
})
export class ReservasPage {

  reservas:Reserva[] = [];

  reserva:string;
  cedula:number;
  edad:number;
  nombre:string;
  apellido:string;
  correo:string;
  reservado:boolean;

  vuelos:Vuelo[]=[];

  constructor(public navCtrl: NavController,
              public alertCtrl:AlertController,
              private listaReservasProvider:ListaReservasProvider) {

  }

  consultar(){
    this.listaReservasProvider.cargarData();

    this.reservas = this.listaReservasProvider.reservas;

    for (let i = 0; i < this.reservas.length; i++) {

      if (this.cedula != this.reservas[i].cedula) {
        let alert = this.alertCtrl.create({
          title: 'Reserva no encontrada',
          subTitle: 'No se encuentra reserva con el número de cédula',
          buttons: ['OK']
        });
        alert.present();
        return;
      } else {
         this.reserva = this.reservas[i].reserva;
         this.cedula = this.reservas[i].cedula;
         this.edad = this.reservas[i].edad;
         this.nombre = this.reservas[i].nombre;
         this.apellido = this.reservas[i].apellido;
         this.correo = this.reservas[i].correo;
         this.reservado = this.reservas[i].reservado;
       }
    }

    console.log(this.correo);

  }

}
