import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppuntamentoDto } from '../entities/appuntamento-dto';
import { CriterioRicercaDto } from '../entities/criterio-ricerca-dto';
import { ListaAppuntamentiDto } from '../entities/lista-appuntamenti-dto';
import { ListaPrenotazioniDto } from '../entities/lista-prenotazioni-dto';
import { Prenotazione } from '../entities/prenotazione';
import { PrenotazioneDto } from '../entities/prenotazione-dto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-area-prenotazioni',
  templateUrl: './area-prenotazioni.component.html',
  styleUrls: ['./area-prenotazioni.component.css']
})
export class AreaPrenotazioniComponent implements OnInit {

  prenotazione = new Prenotazione();
  prenotazionePrecedente = new Prenotazione();
  prenotazioni: Prenotazione[] = [];
  url = "http://localhost:8080/";
  showHidden = false;
  showAdd = false; //variabile che fa comparire il messaggio di ringraziamento dopo aver prenotato
  noAdd = false; //errore:form non compilato
  showDel = false; //variabile che mostra il messaggio di dispiacere se un appuntamento viene disdetto
  showMod = false;//variabile che mostra la modifica di una prenotazione
  noMod = false;//variabile che impedisce di modificare una cella svuotandola.
  staiModificando = false;
  staiEliminando = false;
  showNoMod = false; //variabile che mostra l'annullamento di una modifica
  showNoDel = false; //eliminazione annullata
  showSearch = false; //ricerca effettuata
  noSearch = false; //Errore: campo di ricerca non compilato 
  notFoundSearch = false; // dato non trovato
  search = "";
  // stati possibili: Aggiungi, Modifica, Rimozione, Visualizza, Transitorio
  stato = "V";
  preloader = false;
  messaggio = "";

  constructor(private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.aggiorna();
  }

  ngOnInit(): void {
  }

  //rotte

  indietro() {
    this.router.navigateByUrl("/app-home-page");
  }

  Taglio() {
    this.router.navigateByUrl("/app-taglio-uomo");
  }

  //stati

  conferma() {
    console.log("siamo in conferma");
    this.showHidden = true;
    this.noAdd = false;
    this.showAdd = false;
    this.showDel = false;
    this.showSearch = false;
    this.noMod = false;
    this.noSearch = false;
    this.notFoundSearch = false;
    this.resetPreloader();
    switch (this.stato) {
      case "A":
        this.aggiungi();
        break;
      case "M":
        this.salvaModifica();
        break;
      case "R":
        this.deletePrenotazione();
        break;
      default:
        console.log("Transizione inattesa!");
    }
  }

  annulla() {
    console.log("siamo nello stato annulla");
    this.prenotazione = this.prenotazionePrecedente;
    this.stato = "V";
    this.noAdd = false;
    this.showAdd = false;
    this.showAdd = false;
    this.showNoMod = true;
    this.noMod = false;
    this.showMod = false;
    this.showNoDel = true;
    this.staiModificando = false;
    this.staiEliminando = false;
    this.noSearch = false;
    this.showSearch = false;
    this.notFoundSearch = false;
    this.prenotazione = new Prenotazione();

  }

  modifica(pr: Prenotazione) {
    console.log("siamo nello stato di modifica");
    this.stato = "M";
    this.prenotazione = Object.assign({}, pr);
    this.prenotazionePrecedente = pr;
    this.showAdd = false;
    this.showDel = false;
    this.staiModificando = true;
    this.showMod = false;
    this.noMod = false;
    this.staiEliminando = false;
    this.noAdd = false;
    this.showNoMod = false;
    this.showNoDel = false;
    this.showSearch = false;
    this.noSearch = false;
    this.notFoundSearch = false;
  }

  elimina(pre: Prenotazione) {
    this.stato = "R";
    this.prenotazione = pre;
    this.prenotazionePrecedente = pre;
    this.showAdd = false;
    this.staiModificando = false;
    this.staiEliminando = true;
    this.showDel = false;
    this.noAdd = false;
    this.showNoDel = false;
    this.showMod = false;
    this.noMod = false;
    this.showNoMod = false;
    this.showSearch = false;
    this.noSearch = false;
    this.notFoundSearch = false;
  }

  aggiungi() {
    console.log("siamo nello stato aggiungi");
    this.stato = "A";
    this.prenotazione = new Prenotazione();
    this.prenotazionePrecedente = new Prenotazione();
    this.showAdd = false;
    this.noAdd = false;
    this.showDel = false;
    this.staiModificando = false;
    this.staiEliminando = false;
    this.showNoMod = false;
    this.noMod = false;
    this.showNoDel = false;
    this.showSearch = false;
    this.noSearch = false;
    this.notFoundSearch = false;
  }

  //bottoni
  aggiorna() {
    this.http.get<ListaPrenotazioniDto>(this.url + "aggiorna"
    ).subscribe(c => {
      this.prenotazioni = c.listaPrenotazioniDto;
      this.preloader = false;
    });
    this.staiModificando = false;
    this.staiEliminando = false;
    this.showAdd = false;
    this.showDel = false;
    this.showSearch = false;
    this.noSearch = false;
    this.noMod = false;
    this.notFoundSearch = false;
  }

  ShowHidden(): void {
    this.aggiorna();
    this.showHidden = !this.showHidden;
    this.showAdd = false; //variabile che fa comparire il messaggio di ringraziamento dopo aver prenotato
    this.noAdd = false; //errore:form non compilato
    this.showDel = false; //variabile che mostra il messaggio di dispiacere se un appuntamento viene disdetto
    this.showMod = false;//variabile che mostra la modifica di una prenotazione
    this.noMod = false;//variabile che impedisce di modificare una cella svuotandola.
    this.staiModificando = false;
    this.staiEliminando = false;
    this.showNoMod = false; //variabile che mostra l'annullamento di una modifica
    this.showNoDel = false; //eliminazione annullata
    this.showSearch = false; //ricerca effettuata
    this.noSearch = false; //Errore: campo di ricerca non compilato o dato non trovato
    this.search = "";
    this.notFoundSearch = false;
  }

  aggiungiPrenotazione() {

    console.log("siamo in aggiungiPrenotazione");
    let dto = new PrenotazioneDto();
    dto.prenotazioneDto = this.prenotazione;
    if (this.prenotazione.cliente == "" || this.prenotazione.dataPrenotazione == null
      || this.prenotazione.ora == "" || this.prenotazione.tipoDiServizio == "") {
      console.log("errore: form non compilato");
      this.noAdd = true;
      this.showAdd = false;
      this.showDel = false;
      this.showNoDel = false;
      this.showMod = false;
      this.noMod = false;
      this.showNoMod = false;
      this.showSearch = false;
      this.noSearch = false;
      this.noMod = false;
      this.notFoundSearch = false;
    } else {
      this.http.post<ListaPrenotazioniDto>(this.url + "aggiungi"
        , dto).subscribe(c =>
          this.prenotazioni = c.listaPrenotazioniDto
        );
      this.prenotazione = new Prenotazione();
      this.showAdd = true;
      this.toastr.success('Prenotazione effettuata');
      this.noAdd = false;
      this.showDel = false;
      this.showNoDel = false;
      this.showMod = false;
      this.showNoMod = false;
      this.showSearch = false;
      this.noSearch = false;
      this.noMod = false;
      this.notFoundSearch = false;
    }
  }
  salvaModifica() {
    console.log("siamo nel metodo salvaModifica");
    let dto = new PrenotazioneDto();
    dto.prenotazioneDto = this.prenotazione;
    if (this.prenotazione.cliente == "" || this.prenotazione.dataPrenotazione == null
      || this.prenotazione.ora == "" || this.prenotazione.tipoDiServizio == "") {
      console.log("errore: impossibile modificare");
      this.noMod = true;
      this.preloader = false;
      this.showMod = false;
      this.noAdd = false;
      this.staiModificando = false;
      this.staiEliminando = false;
      this.showNoMod = false;
      this.showDel = false;
      this.showNoDel = false;
      this.showSearch = false;
      this.noSearch = false;
      this.notFoundSearch = false;
    } else {
      this.http.post<ListaPrenotazioniDto>(this.url + "modificaPrenotazione"
        , dto).subscribe(c => {
          this.prenotazioni = c.listaPrenotazioniDto;
          this.stato = "V";
        });
      this.prenotazione = new Prenotazione();
      this.preloader = false;
      this.showMod = true;
      this.noMod = false;
      this.noAdd = false;
      this.staiModificando = false;
      this.staiEliminando = false;
      this.showNoMod = false;
      this.showDel = false;
      this.showNoDel = false;
      this.showSearch = false;
      this.noSearch = false;
      this.notFoundSearch = false;
    }
  }

  deletePrenotazione() {
    console.log("siamo nel metodo deletePrenotazione");
    let dto = new PrenotazioneDto();
    dto.prenotazioneDto = this.prenotazione;
    this.http.post<ListaPrenotazioniDto>(this.url + "elimina"
      , dto).subscribe(c => {
        this.prenotazioni = c.listaPrenotazioniDto;
        this.stato = "V";
      });
    this.prenotazione = new Prenotazione();
    this.preloader = false;
    this.showAdd = false;
    this.showNoMod = false;
    this.showMod = false;
    this.noMod = false;
    this.staiModificando = false;
    this.staiEliminando = false;
    this.showDel = true;
    this.noAdd = false;
    this.showNoDel = false;
    this.noSearch = false;
    this.showSearch = false;
    this.notFoundSearch = false;
  }


  ricerca() {
    console.log("siamo nel metodo ricerca");
    let criterio = new CriterioRicercaDto();
    criterio.stringa = this.search;
    if (this.search == "") {
      console.log("errore:campo di ricerca vuoto");
      this.aggiorna();
      this.noSearch = true; //messaggio errore
      this.preloader = false;
      this.showAdd = false;
      this.showNoMod = false;
      this.noMod = false;
      this.showMod = false;
      this.staiModificando = false;
      this.staiEliminando = false;
      this.noAdd = false;
      this.showDel = false;
      this.showNoDel = false;
      this.showSearch = false;
      this.notFoundSearch = false;
      this.search = "";
    }
    else {
      this.http.post<ListaPrenotazioniDto>(this.url + "ricerca", criterio)
        .subscribe(r => this.prenotazioni = r.listaPrenotazioniDto
        );
      this.prenotazione = new Prenotazione();
      this.preloader = false;
      this.showAdd = false;
      this.showNoMod = false;
      this.noMod = false;
      this.showMod = false;
      this.staiModificando = false;
      this.staiEliminando = false;
      this.showDel = false;
      this.noAdd = false;
      this.showNoDel = false;
      this.showSearch = true;
      this.noSearch = false;
      this.notFoundSearch = false;
      this.search = "";
    }
    // if (this.prenotazione.cliente == "" || this.prenotazione.ora == "" || this.prenotazione.tipoDiServizio == "") {
    //   console.log("errore:dato non trovato");
    //   this.notFoundSearch = true;
    //   this.preloader = false;
    //   this.showAdd = false;
    //   this.showNoMod = false;
    //   this.noMod = false;
    //   this.showMod = false;
    //   this.staiModificando = false;
    //   this.staiEliminando = false;
    //   this.showDel = false;
    //   this.noAdd = false;
    //   this.showNoDel = false;
    //   this.showSearch = true;
    //   this.noSearch = false;
    //   this.search = "";
    // }
  }

  //altro

  resetPreloader() {
    console.log("metodo resetPreloader");
    this.preloader = true;
    this.messaggio = "";
    this.noMod = false;
    this.showSearch = false;
    this.noAdd = false;
  }
}
