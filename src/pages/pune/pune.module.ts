import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PunePage } from './pune';

@NgModule({
  declarations: [
    PunePage,
  ],
  imports: [
    IonicPageModule.forChild(PunePage),
  ],
})
export class PunePageModule {}
