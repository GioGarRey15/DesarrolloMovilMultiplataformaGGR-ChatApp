import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
  standalone:false
})
export class AjustesPage {

  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back();  // Navega hacia atrás en el historial
  }

}
