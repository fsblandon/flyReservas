import { Component } from '@angular/core';

import { ReservasPage } from '../reservas/reservas';
import { VuelosPage } from '../vuelos/vuelos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = VuelosPage;
  tab2Root = ReservasPage;

  constructor() {

  }
}
