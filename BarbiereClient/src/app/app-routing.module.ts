import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaColoriComponent } from './area-colori/area-colori.component';
import { AreaPersonaleComponent } from './area-personale/area-personale.component';
import { AreaPrenotazioniComponent } from './area-prenotazioni/area-prenotazioni.component';
import { GestioneAppuntamentiEsteticaComponent } from './gestione-appuntamenti-estetica/gestione-appuntamenti-estetica.component';
import { GestioneAppuntamentoParrucchiereComponent } from './gestione-appuntamento-parrucchiere/gestione-appuntamento-parrucchiere.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListaProdottiComponent } from './lista-prodotti/lista-prodotti.component';
import { LoginComponent } from './login/login.component';
import { SezioneAcquistiComponent } from './sezione-acquisti/sezione-acquisti.component';
import { SezioneDonnaServiziEsteticaComponent } from './sezione-donna-servizi-estetica/sezione-donna-servizi-estetica.component';
import { SezioneDonnaServiziParrucchieriComponent } from './sezione-donna-servizi-parrucchieri/sezione-donna-servizi-parrucchieri.component';
import { SezioneDonnaComponent } from './sezione-donna/sezione-donna.component';
import { TaglioPiegaDonnaComponent } from './taglio-piega-donna/taglio-piega-donna.component';
import { TaglioUomoComponent } from './taglio-uomo/taglio-uomo.component';

const routes: Routes = [
  { path: 'app-home-page', component: HomePageComponent },
  { path: 'app-login', component: LoginComponent },
  { path: 'app-area-prenotazioni', component: AreaPrenotazioniComponent },
  { path: 'app-area-personale', component: AreaPersonaleComponent },
  { path: 'app-sezione-acquisti', component: SezioneAcquistiComponent },
  { path: 'app-lista-prodotti', component: ListaProdottiComponent },
  { path: 'app-sezione-donna', component: SezioneDonnaComponent },
  { path: 'app-sezione-donna-servizi-parrucchieri', component: SezioneDonnaServiziParrucchieriComponent },
  { path: 'app-sezione-donna-servizi-estetica', component: SezioneDonnaServiziEsteticaComponent },
  { path: 'app-gestione-appuntamento-parrucchiere', component: GestioneAppuntamentoParrucchiereComponent },
  { path: 'app-gestione-appuntamenti-estetica', component: GestioneAppuntamentiEsteticaComponent },
  { path: 'app-area-colori', component: AreaColoriComponent },
  { path: 'app-taglio-piega-donna', component: TaglioPiegaDonnaComponent },
  { path:'app-taglio-uomo', component: TaglioUomoComponent},
  { path: '', redirectTo: '/app-home-page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
