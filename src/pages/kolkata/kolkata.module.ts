import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KolkataPage } from './kolkata';

@NgModule({
  declarations: [
    KolkataPage,
  ],
  imports: [
    IonicPageModule.forChild(KolkataPage),
  ],
})
export class KolkataPageModule {}
