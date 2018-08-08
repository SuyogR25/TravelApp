import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PuneSeeSinhagadPage } from '../pune-see-sinhagad/pune-see-sinhagad';
import { PuneSeeShaniwarPage } from '../pune-see-shaniwar/pune-see-shaniwar';
import { PuneSeeGTemplePage } from '../pune-see-g-temple/pune-see-g-temple';
import { PuneSeeOkayamaPage } from '../pune-see-okayama/pune-see-okayama';
import { PuneSeeLavasaPage } from '../pune-see-lavasa/pune-see-lavasa';
import { PuneHotelsOrchidPage } from '../pune-hotels-orchid/pune-hotels-orchid';
import { PuneHotelsHyattPage } from '../pune-hotels-hyatt/pune-hotels-hyatt';
import { PuneHotelsJwPage } from '../pune-hotels-jw/pune-hotels-jw';
import { PuneHotelsRadissonPage } from '../pune-hotels-radisson/pune-hotels-radisson';
import { PuneHotelsWestinPage } from '../pune-hotels-westin/pune-hotels-westin';
import { PuneShopSeasonsPage } from '../pune-shop-seasons/pune-shop-seasons';
import { PuneShopPhoenixPage } from '../pune-shop-phoenix/pune-shop-phoenix';
import { PuneShopAmanoraPage } from '../pune-shop-amanora/pune-shop-amanora';
import { PuneShopKumarPage } from '../pune-shop-kumar/pune-shop-kumar';
import { PuneShopNiteshPage } from '../pune-shop-nitesh/pune-shop-nitesh';

/**
 * Generated class for the PunePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pune',
  templateUrl: 'pune.html',
})
export class PunePage {
  Menu: string = "Eat";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PunePage');
  }

  // Pune See start here

  goToPune_See_SinhagadPage() {
    this.navCtrl.push(PuneSeeSinhagadPage);
  }

  goToPuneSeeShaniwarPage() {
    this.navCtrl.push(PuneSeeShaniwarPage);
  }

  goToPuneSeeGTemplePage() {
    this.navCtrl.push(PuneSeeGTemplePage);
  }

  goToPuneSeeOkayamaPage() {
    this.navCtrl.push(PuneSeeOkayamaPage);
  }

  goToPuneSeeLavasaPage() {
    this.navCtrl.push(PuneSeeLavasaPage);
  }

  // Pune Hotels Start here 

  goToPuneHotelsOrchidPage() {
    this.navCtrl.push(PuneHotelsOrchidPage);
  }

  goToPuneHotelsHyattPage() {
    this.navCtrl.push(PuneHotelsHyattPage);
  }

  goToPuneHotelsJwPage() {
    this.navCtrl.push(PuneHotelsJwPage);
  }

  goToPuneHotelsRadissonPage() {
    this.navCtrl.push(PuneHotelsRadissonPage);
  }

  goToPuneHotelsWestinPage() {
    this.navCtrl.push(PuneHotelsWestinPage);
  }

  // Pune Shop start here 

  goToPuneShopSeasonsPage() {
    this.navCtrl.push(PuneShopSeasonsPage);
  }

  goToPuneShopPhoenixPage() {
    this.navCtrl.push(PuneShopPhoenixPage);
  }

  goToPuneShopAmanoraPage() {
    this.navCtrl.push(PuneShopAmanoraPage);
  }

  goToPuneShopKumarPage() {
    this.navCtrl.push(PuneShopKumarPage);
  }

  goToPuneShopNiteshPage() {
    this.navCtrl.push(PuneShopNiteshPage);
  }

}

