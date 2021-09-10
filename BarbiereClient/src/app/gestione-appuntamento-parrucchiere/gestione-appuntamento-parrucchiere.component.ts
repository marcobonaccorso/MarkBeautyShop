import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CriterioRicercaDto } from '../entities/criterio-ricerca-dto';
import { ListaPrenotazioniParrucchiereDto } from '../entities/lista-prenotazioni-parrucchiere-dto';
import { PrenotazioneParrucchiere } from '../entities/prenotazione-parrucchiere';
import { PrenotazioneParrucchiereDto } from '../entities/prenotazione-parrucchiere-dto';
import { RicercaAppuntamentoParrucchiereDto } from '../entities/ricerca-appuntamento-parrucchiere-dto';

@Component({
  selector: 'app-gestione-appuntamento-parrucchiere',
  templateUrl: './gestione-appuntamento-parrucchiere.component.html',
  styleUrls: ['./gestione-appuntamento-parrucchiere.component.css']
})
export class GestioneAppuntamentoParrucchiereComponent implements OnInit {

  prenotazioneParrucchiere = new PrenotazioneParrucchiere();
  prenotazionePrecedente = new PrenotazioneParrucchiere();
  prenotazioniParrucchiere: PrenotazioneParrucchiere[] = [];
  url = "http://localhost:8080/";
  cerca = "";
  showHidden = false;//mostra-nascondi form CRUD
  showAdd = false; //variabile che fa comparire il messaggio di ringraziamento dopo aver prenotato
  showDel = false; //variabile che mostra il messaggio di dispiacere se un appuntamento viene disdetto
  showMod = false;//variabile che mostra la modifica di una prenotazione
  staiModificando = false;
  staiEliminando = false;
  showNoMod = false; //variabile che mostra l'annullamento di una modifica
  showNoDel = false; //eliminazione annullata
  showSearch = false;
  // stati possibili: Aggiungi, Modifica, Rimozione, Visualizza, Transitorio
  stato = "V";
  preloader = false;
  messaggio = "";

  constructor(private http: HttpClient, private router: Router) {
    this.aggiorna();
  }

  ngOnInit(): void {
  }

  indietro() { //torno alla home page
    this.router.navigateByUrl("/app-sezione-donna");
  }

  VediColori() {
    this.router.navigateByUrl("/app-area-colori");
  }

  //stati

  conferma() {
    console.log("siamo in conferma");
    this.showHidden = true;
    this.showAdd = false;
    this.showSearch =false;
    this.showDel = false;
    this.resetPreloader();
    switch (this.stato) {
      case "A":
        this.aggiungi();
        break;
      case "M":
        this.salvaModifica();
        break;
      case "R":
        this.eliminaPrenotazione();
        break;
      default:
        console.log("Transizione inattesa!");
    }
  }


  annulla() {
    console.log("siamo nello stato annulla");
    this.prenotazioneParrucchiere = this.prenotazionePrecedente;
    this.stato = "V";
    this.showAdd = false;
    this.showNoMod = true;
    this.showMod = false;
    this.showNoDel = true;
    this.staiModificando = false;
    this.showSearch =false;
    this.staiEliminando = false;
    this.prenotazioneParrucchiere = new PrenotazioneParrucchiere();
  }



  modifica(pr: PrenotazioneParrucchiere) {
    console.log("siamo nello stato di modifica");
    this.stato = "M";
    console.log("Stai modificando un dato.");
    this.showAdd = false;
    this.showDel = false;
    this.staiModificando = true;
    this.staiEliminando = false;
    this.prenotazioneParrucchiere = Object.assign({}, pr);
    this.prenotazionePrecedente = pr;
    this.showNoMod = false;
    this.showNoDel = false;
    this.showSearch =false;
  }

  elimina(pre: PrenotazioneParrucchiere) {
    this.stato = "R";
    this.prenotazioneParrucchiere = pre;
    this.prenotazionePrecedente = pre;
    this.showAdd = false;
    this.showMod=false;
    this.staiModificando = false;
    this.staiEliminando = true;
    this.showDel = false;
    this.showNoDel = false;
    this.showNoMod = false;
    this.showSearch =false;
  }

  aggiungi() {
    console.log("siamo nello stato aggiungi");
    this.stato = "A";
    this.prenotazioneParrucchiere = new PrenotazioneParrucchiere();
    this.prenotazionePrecedente = new PrenotazioneParrucchiere();
    this.showAdd = false;
    this.showDel = false;
    this.staiModificando = false;
    this.staiEliminando = false;
    this.showNoMod = false;
    this.showNoDel = false;
    this.showSearch =false;
  }


  //bottoni

  ShowForm() {
    this.showHidden = !this.showHidden;
  }


  aggiorna() {
    this.http.get<ListaPrenotazioniParrucchiereDto>(this.url + "aggiornaPrenotazioneParrucchiere"
    ).subscribe(c =>
      this.prenotazioniParrucchiere = c.listaPrenotazioniParrucchiereDto
    );
    this.staiModificando = false;
    this.staiEliminando = false;
    this.showAdd = false;
    this.showDel = false;
    this.showSearch =false;
  }

  aggiungiPrenotazioneParrucchiere() {
    console.log("siamo in aggiungiPrenotazione");
    let dto = new PrenotazioneParrucchiereDto();
    dto.prenotazioneParrucchiereDto = this.prenotazioneParrucchiere;
    this.http.post<ListaPrenotazioniParrucchiereDto>(this.url + "aggiungiPrenotazioneParrucchiere"
      , dto).subscribe(c =>
        this.prenotazioniParrucchiere = c.listaPrenotazioniParrucchiereDto
      );
    this.prenotazioneParrucchiere = new PrenotazioneParrucchiere();
    this.showAdd = true;
    this.showDel = false;
    this.showNoDel = false;
    this.showMod = false;
    this.staiModificando = false;
    this.staiEliminando = false;
    this.showNoMod = false;
    this.showSearch =false;
  }


  salvaModifica() {
    console.log("siamo nel metodo salvaModifica");
    let dto = new PrenotazioneParrucchiereDto();
    dto.prenotazioneParrucchiereDto = this.prenotazioneParrucchiere;
    this.http.post<ListaPrenotazioniParrucchiereDto>(this.url + "modificaPrenotazioneParrucchiere"
      , dto).subscribe(c => {
        this.prenotazioniParrucchiere = c.listaPrenotazioniParrucchiereDto
        this.stato = "V";
      });
    this.prenotazioneParrucchiere = new PrenotazioneParrucchiere();
    this.preloader = false;
    this.showMod = true;
    this.staiModificando = false;
    this.staiEliminando = false;
    this.showNoMod = false;
    this.showDel = false;
    this.showNoDel = false;
    this.showSearch =false;
  }

  eliminaPrenotazione() {
    console.log("siamo nel metodo deletePrenotazione");
    let dto = new PrenotazioneParrucchiereDto();
    dto.prenotazioneParrucchiereDto = this.prenotazioneParrucchiere;
    this.http.post<ListaPrenotazioniParrucchiereDto>(this.url + "eliminaPrenotazioneParrucchiere"
      , dto).subscribe(c => {
        this.prenotazioniParrucchiere = c.listaPrenotazioniParrucchiereDto
        this.stato = "V";
      });
    this.prenotazioneParrucchiere = new PrenotazioneParrucchiere();
    this.preloader = false;
    this.showAdd = false;
    this.showNoMod = false;
    this.showMod = false;
    this.staiModificando = false;
    this.staiEliminando = false;
    this.showDel = true;
    this.showNoDel = false;
    this.showSearch =false;
  }

  ricerca() {
    let criterioRicercaAppuntamentoParrucchiere = new RicercaAppuntamentoParrucchiereDto();
    criterioRicercaAppuntamentoParrucchiere.ricercaAppuntamentoParrucchiereDto = this.cerca;
    this.http.post<ListaPrenotazioniParrucchiereDto>(this.url + "ricercaAppuntamentoParrucchiere", criterioRicercaAppuntamentoParrucchiere)
      .subscribe(r => this.prenotazioniParrucchiere = r.listaPrenotazioniParrucchiereDto
      );
    this.prenotazioneParrucchiere = new PrenotazioneParrucchiere();
    this.preloader = false;
    this.showAdd = false;
    this.showNoMod = false;
    this.showMod = false;
    this.staiModificando = false;
    this.staiEliminando = false;
    this.showDel = false;
    this.showNoDel = false;
    this.showSearch = true;
    this.cerca = "";
  }

  //altro
  resetPreloader() {
    console.log("metodo resetPreloader");
    this.preloader = true;
    this.messaggio = "";
  }

}
