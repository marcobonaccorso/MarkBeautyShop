import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { AreaPrenotazioniComponent } from './area-prenotazioni/area-prenotazioni.component';
import { AreaPersonaleComponent } from './area-personale/area-personale.component';
import { SezioneAcquistiComponent } from './sezione-acquisti/sezione-acquisti.component';
import { ListaProdottiComponent } from './lista-prodotti/lista-prodotti.component';
import { SezioneDonnaComponent } from './sezione-donna/sezione-donna.component';
import { SezioneDonnaServiziParrucchieriComponent } from './sezione-donna-servizi-parrucchieri/sezione-donna-servizi-parrucchieri.component';
import { SezioneDonnaServiziEsteticaComponent } from './sezione-donna-servizi-estetica/sezione-donna-servizi-estetica.component';
import { GestioneAppuntamentoParrucchiereComponent } from './gestione-appuntamento-parrucchiere/gestione-appuntamento-parrucchiere.component';
import { GestioneAppuntamentiEsteticaComponent } from './gestione-appuntamenti-estetica/gestione-appuntamenti-estetica.component';
import { AreaColoriComponent } from './area-colori/area-colori.component';
import { TaglioPiegaDonnaComponent } from './taglio-piega-donna/taglio-piega-donna.component';
import { TaglioUomoComponent } from './taglio-uomo/taglio-uomo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    AreaPrenotazioniComponent,
    AreaPersonaleComponent,
    SezioneAcquistiComponent,
    ListaProdottiComponent,
    SezioneDonnaComponent,
    SezioneDonnaServiziParrucchieriComponent,
    SezioneDonnaServiziEsteticaComponent,
    GestioneAppuntamentoParrucchiereComponent,
    GestioneAppuntamentiEsteticaComponent,
    AreaColoriComponent,
    TaglioPiegaDonnaComponent,
    TaglioUomoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }