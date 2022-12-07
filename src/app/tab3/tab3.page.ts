import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

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

  async storyAlert() {
    const alert = await this.alertController.create({
      header: 'Story Time At Heritage Park',
      subHeader: 'Date:',
      message: 'Oct 19 - Dec 14',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async golfAlert() {
    const alert = await this.alertController.create({
      header: 'Potion Putt: Mini Golf',
      subHeader: 'Date:',
      message: 'Nov 3 - Jan 22',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async jazzAlert() {
    const alert = await this.alertController.create({
      header: 'Live Jazz At The Establishment',
      subHeader: 'Date:',
      message: 'Nov 3 - Dec 15',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async santaAlert() {
    const alert = await this.alertController.create({
      header: 'Santas Enchanted Forest',
      subHeader: 'Date:',
      message: 'Nov 12 - Dec 24',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async eventAlert() {
    const alert = await this.alertController.create({
      header: 'Book An Event now!',
      subHeader: 'Date:',
      message: 'TBD',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
