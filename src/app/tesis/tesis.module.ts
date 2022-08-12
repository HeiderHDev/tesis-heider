import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesisRoutingModule } from './tesis-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { ApiComponent } from './pages/api/api.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [
    HomePageComponent,
    InfoPageComponent,
    ApiComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    TesisRoutingModule,
  ]
})
export class TesisModule { }