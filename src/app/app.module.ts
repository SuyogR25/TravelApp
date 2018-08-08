import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PunePage } from '../pages/pune/pune';
import { MumbaiPage } from '../pages/mumbai/mumbai';
import { KolkataPage } from '../pages/kolkata/kolkata';
import { BengaluruPage } from '../pages/bengaluru/bengaluru';
import { PuneSeeSinhagadPage } from '../pages/pune-see-sinhagad/pune-see-sinhagad';
import { PuneSeeShaniwarPage } from '../pages/pune-see-shaniwar/pune-see-shaniwar';
import { PuneSeeGTemplePage } from '../pages/pune-see-g-temple/pune-see-g-temple';
import { PuneSeeOkayamaPage } from '../pages/pune-see-okayama/pune-see-okayama';
import { PuneSeeLavasaPage } from '../pages/pune-see-lavasa/pune-see-lavasa';
import { PuneHotelsOrchidPage } from '../pages/pune-hotels-orchid/pune-hotels-orchid';
import { PuneHotelsHyattPage } from '../pages/pune-hotels-hyatt/pune-hotels-hyatt';
import { PuneHotelsJwPage } from '../pages/pune-hotels-jw/pune-hotels-jw';
import { PuneHotelsRadissonPage } from '../pages/pune-hotels-radisson/pune-hotels-radisson';
import { PuneHotelsWestinPage } from '../pages/pune-hotels-westin/pune-hotels-westin';
import { PuneShopSeasonsPage } from '../pages/pune-shop-seasons/pune-shop-seasons';
import { PuneShopPhoenixPage } from '../pages/pune-shop-phoenix/pune-shop-phoenix';
import { PuneShopAmanoraPage } from '../pages/pune-shop-amanora/pune-shop-amanora';
import { PuneShopKumarPage } from '../pages/pune-shop-kumar/pune-shop-kumar';
import { PuneShopNiteshPage } from '../pages/pune-shop-nitesh/pune-shop-nitesh';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PunePage,
    MumbaiPage,
    KolkataPage,
    BengaluruPage,
// pune see 
    PuneSeeSinhagadPage,
    PuneSeeShaniwarPage,
    PuneSeeGTemplePage,
    PuneSeeOkayamaPage,
    PuneSeeLavasaPage,
// pune hotels
    PuneHotelsOrchidPage,
    PuneHotelsHyattPage,
    PuneHotelsJwPage,
    PuneHotelsRadissonPage,
    PuneHotelsWestinPage,

// pune shop
    PuneShopSeasonsPage,
    PuneShopPhoenixPage,
    PuneShopAmanoraPage,
    PuneShopKumarPage,
    PuneShopNiteshPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PunePage,
    MumbaiPage,
    KolkataPage,
    BengaluruPage, 
// pune see 
    PuneSeeSinhagadPage,
    PuneSeeShaniwarPage,
    PuneSeeGTemplePage,
    PuneSeeOkayamaPage,
    PuneSeeLavasaPage,
// pune hotels
    PuneHotelsOrchidPage,
    PuneHotelsHyattPage,
    PuneHotelsJwPage,
    PuneHotelsRadissonPage,
    PuneHotelsWestinPage,
// pune shop
    PuneShopSeasonsPage,
    PuneShopPhoenixPage,
    PuneShopAmanoraPage,
    PuneShopKumarPage,
    PuneShopNiteshPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
