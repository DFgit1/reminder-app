import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Reminder Set!',
      subHeader: 'Get Excited!',
      message: 'Event saved to Reminders',
      buttons: ['OK'],
    });

    await alert.present();
  }


}
