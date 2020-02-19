import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PoModule } from '@portinari/portinari-ui';
import { FormsModule } from '@angular/forms';
import { WellcomeComponent } from '../shared/components/wellcome/wellcome.component';

@NgModule({
  declarations: [HomeComponent, WellcomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PoModule,
    FormsModule
  ]
})
export class HomeModule { }
