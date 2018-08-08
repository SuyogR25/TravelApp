import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MumbaiPage } from './mumbai';

@NgModule({
  declarations: [
    MumbaiPage,
  ],
  imports: [
    IonicPageModule.forChild(MumbaiPage),
  ],
})
export class MumbaiPageModule {}
