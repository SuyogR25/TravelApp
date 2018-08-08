import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PunePage} from '../pune/pune';
import { MumbaiPage } from '../mumbai/mumbai';
import { KolkataPage } from '../kolkata/kolkata';
import { BengaluruPage } from '../bengaluru/bengaluru';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToPunePage(){
    this.navCtrl.push(PunePage);
  }
  goToMumbaiPage(){
    this.navCtrl.push(MumbaiPage);
  }
  goToKolkataPage(){
    this.navCtrl.push(KolkataPage);
  }
  goToBenguluruPage(){
    this.navCtrl.push(BengaluruPage);
  }

}
