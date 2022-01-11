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
import { CommonModule } from '@angular/common';
// import { ToastrModule } from 'ngx-toastr';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrandsComponent } from './brands/brands.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';


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
    TaglioUomoComponent,
    BrandsComponent
  ],
  imports: [
    MatSliderModule, //angular material
    BrowserModule,
    CommonModule,
    // ToastrModule.forRoot(), // ToastrModule added
    AppRoutingModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatDividerModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
