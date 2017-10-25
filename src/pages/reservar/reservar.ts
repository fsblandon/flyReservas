import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import {Reserva} from '../../app/clases/reserva';
import {Vuelo} from '../../app/clases/vuelo';

import {VuelosPage} from '../vuelos/vuelos';
import {ReservasPage} from '../reservas/reservas';

import {ListaReservasProvider} from '../../app/providers/lista-reservas/lista-reservas';

/**
 * Generated class for the ReservarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-reservar',
  templateUrl: 'reservar.html',
})
export class ReservarPage {

  reservas:Reserva[] = [];

  reserva:string;
  cedula:number;
  edad:number;
  nombre:string = "";
  apellido:string = ""
  correo:string = "";
  reservado:boolean = false;

  //vuelo:Vuelo[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl:AlertController,
            private listaReservasProvider:ListaReservasProvider) {

    let nroReserva = this.navParams.get("reserva");

    if(!nroReserva){
      return;
    }else{
      this.reserva = nroReserva;
      console.log(this.reserva);
    }

  }

  reservar(){
    if(this.cedula != null && this.edad != null &&
      this.nombre != "" && this.apellido != "" &&
      this.correo != ""){

      if(this.edad < 19){
        let alert = this.alertCtrl.create({
          title: 'Edad',
          subTitle: 'Solo se puede reservar si es mayor de edad',
          buttons: ['OK']
        });
        alert.present();
        return;
      }

      let reserva = new Reserva();
      reserva.reserva = this.reserva;
      reserva.cedula = this.cedula;
      reserva.edad = this.edad;
      reserva.nombre = this.nombre;
      reserva.apellido = this.apellido;
      reserva.correo = this.correo;

      reserva.reservado = true;

      //this.reservas.push(reserva);

      //Agregar al localStorage
      this.listaReservasProvider.agregarData(reserva);

      this.reserva = ""
      this.cedula = null;
      this.edad = null;
      this.nombre = "";
      this.apellido = "";
      this.correo = "";
      this.reservado = false;

      this.navCtrl.push(ReservasPage);
      //this.navCtrl.pop();
    }
    else{
      let alert = this.alertCtrl.create({
        title: 'Campos vacíos',
        subTitle: 'Por favor rellenar todos los campos',
        buttons: ['OK']
      });
      alert.present();
      return;
    }
  }
}
