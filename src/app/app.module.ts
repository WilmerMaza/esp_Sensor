import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HumedadComponent } from './view/components/humedad/humedad.component';
import { SensoresComponent } from './view/components/sensores/sensores.component';
import { TemperaturaComponent } from './view/components/temperatura/temperatura.component';

@NgModule({
  declarations: [
    AppComponent,
    SensoresComponent,
    TemperaturaComponent,
    HumedadComponent
  ],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
