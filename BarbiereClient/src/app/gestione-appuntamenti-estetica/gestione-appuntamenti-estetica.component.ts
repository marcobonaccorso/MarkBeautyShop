import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ListaPrenotazioniEsteticaDto } from '../entities/lista-prenotazioni-estetica-dto';
import { PrenotazioneEstetica } from '../entities/prenotazione-estetica';
import { PrenotazioneEsteticaDto } from '../entities/prenotazione-estetica-dto';
import { RicercaAppuntamentoEsteticaDto } from '../entities/ricerca-appuntamento-estetica-dto';

@Component({
  selector: 'app-gestione-appuntamenti-estetica',
  templateUrl: './gestione-appuntamenti-estetica.component.html',
  styleUrls: ['./gestione-appuntamenti-estetica.component.css']
})
export class GestioneAppuntamentiEsteticaComponent implements OnInit {

  prenotazioneEstetica = new PrenotazioneEstetica();
  prenotazionePrecedente = new PrenotazioneEstetica();
  prenotazioniEstetica: PrenotazioneEstetica[] = [];
  url = "http://localhost:8080/";
  search = "";
  showHidden = false;
  showAdd = false; //variabile che fa comparire il messaggio di ringraziamento dopo aver prenotato
  showDel = false; //variabile che mostra il messaggio di dispiacere se un appuntamento viene disdetto
  showMod = false;//variabile che mostra la modifica di una prenotazione
  staiModificando = false;
  staiEliminando = false;
  showNoMod = false; //variabile che mostra l'annullamento di una modifica
  showNoDel = false; //eliminazione annullata
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

  indietro() { //torno alla home page
    this.router.navigateByUrl("/app-sezione-donna");
  }

  //PrenotazioneEsteticaDto
  //ListaPrenotazioniEsteticaDto


  //stati


  conferma() {
    console.log("siamo in conferma");
    this.showHidden = true;
    this.showAdd = false;
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
    this.toastr.info('Operazione annullata.')
    this.prenotazioneEstetica = this.prenotazionePrecedente;
    this.stato = "V";
    this.showAdd = false;
    this.showNoMod = true;
    this.showMod = false;
    this.showNoDel = true;
    this.staiModificando = false;
    this.staiEliminando = false;
    this.prenotazioneEstetica = new PrenotazioneEstetica();
  }


  modifica(pr: PrenotazioneEstetica) {
    console.log("siamo nello stato di modifica");
    this.toastr.warning('Stai modificando un dato.');
    this.stato = "M";
    console.log("Stai modificando un dato.");
    this.showAdd = false;
    this.showDel = false;
    this.staiModificando = true;
    this.staiEliminando = false;
    this.prenotazioneEstetica = Object.assign({}, pr);
    this.prenotazionePrecedente = pr;
    this.showNoMod = false;
    this.showNoDel = false;
  }

  elimina(pre: PrenotazioneEstetica) {
    this.toastr.warning('Stai eliminando un dato.');
    this.stato = "R";
    this.prenotazioneEstetica = pre;
    this.prenotazionePrecedente = pre;
    this.showAdd = false;
    this.staiModificando = false;
    this.staiEliminando = true;
    this.showMod = false;
    this.showDel = false;
    this.showNoDel = false;
    this.showNoMod = false;
  }

  aggiungi() {
    console.log("siamo nello stato aggiungi");
    this.stato = "A";
    this.prenotazioneEstetica = new PrenotazioneEstetica();
    this.prenotazionePrecedente = new PrenotazioneEstetica();
    this.showAdd = false;
    this.showDel = false;
    this.staiModificando = false;
    this.staiEliminando = false;
    this.showNoMod = false;
    this.showNoDel = false;
  }


  aggiungiPrenotazioneEstetica() {
    let dto = new PrenotazioneEsteticaDto();
    dto.prenotazioneEsteticaDto = this.prenotazioneEstetica;
    if (this.prenotazioneEstetica.cliente == "" ||
      this.prenotazioneEstetica.dataPrenotazione == null ||
      this.prenotazioneEstetica.ora == "" ||
      this.prenotazioneEstetica.tipoDiServizio == ""
    ) {
      console.log('Errore:form non compilato correttamente.');
      this.toastr.error('Errore: form non compilato correttamente.');
    }
    else {
      this.http.post<ListaPrenotazioniEsteticaDto>(this.url + "aggiungiPrenotazioneEstetica"
        , dto).subscribe(c =>
          this.prenotazioniEstetica = c.listaPrenotazioniEsteticaDto
        );
      this.prenotazioneEstetica = new PrenotazioneEstetica();
      this.showAdd = !this.showAdd;
      this.showDel = false;
      this.showNoDel = false;
      this.showMod = false;
      this.staiModificando = false;
      this.staiEliminando = false;
      this.showNoMod = false;
    }
  }

  salvaModifica() {
    console.log("siamo nel metodo salvaModifica");
    let dto = new PrenotazioneEsteticaDto();
    dto.prenotazioneEsteticaDto = this.prenotazioneEstetica;
    if (this.prenotazioneEstetica.cliente == "" ||
    this.prenotazioneEstetica.dataPrenotazione == null ||
    this.prenotazioneEstetica.ora == "" ||
    this.prenotazioneEstetica.tipoDiServizio == ""
  ) {
    console.log('Errore:impossibile eseguire questa azione.');
    this.toastr.error('Errore: impossibile eseguire questa operazione, annulla per proseguire.');
  }
  else {
    this.http.post<ListaPrenotazioniEsteticaDto>(this.url + "modificaPrenotazioneEstetica"
      , dto).subscribe(c => {
        this.prenotazioniEstetica = c.listaPrenotazioniEsteticaDto
        this.stato = "V";
      });
    this.prenotazioneEstetica = new PrenotazioneEstetica();
    this.preloader = false;
    this.showMod = true;
    this.staiModificando = false;
    this.staiEliminando = false;
    this.showNoMod = false;
    this.showDel = false;
    this.showNoDel = false;
  }
}

  eliminaPrenotazione() {
    console.log("siamo nel metodo deletePrenotazione");
    let dto = new PrenotazioneEsteticaDto();
    dto.prenotazioneEsteticaDto = this.prenotazioneEstetica;
    this.http.post<ListaPrenotazioniEsteticaDto>(this.url + "eliminaPrenotazioneEstetica"
      , dto).subscribe(c => {
        this.prenotazioniEstetica = c.listaPrenotazioniEsteticaDto
        this.stato = "V";
      });
      this.toastr.success('Dato eliminato correttamente.');
    this.prenotazioneEstetica = new PrenotazioneEstetica();
    this.preloader = false;
    this.showAdd = false;
    this.showNoMod = false;
    this.showMod = false;
    this.staiModificando = false;
    this.staiEliminando = false;
    this.showDel = true;
    this.showNoDel = false;
  }

  ricerca() { 

    let ricercaAppuntamentoEsteticaDto = new RicercaAppuntamentoEsteticaDto();
    ricercaAppuntamentoEsteticaDto.ricercaAppuntamentoEsteticaDto = this.search;
    if (this.search=="") {
      console.log("Errore: il campo di ricerca è vuoto.");
      this.toastr.error('Errore: il campo di ricerca è vuoto');
    } else {
      this.http.post<ListaPrenotazioniEsteticaDto>(this.url + "ricercaAppuntamentoEstetica", ricercaAppuntamentoEsteticaDto)
        .subscribe(r => this.prenotazioniEstetica = r.listaPrenotazioniEsteticaDto
        );

      this.prenotazioneEstetica = new PrenotazioneEstetica();
      this.preloader = false;
      this.showAdd = false;
      this.showNoMod = false;
      this.showMod = false;
      this.staiModificando = false;
      this.staiEliminando = false;
      this.showDel = false;
      this.showNoDel = false;
      // this.showSearch = true;
      this.search = "";
    }
  }
  

  aggiorna() {
    this.http.get<ListaPrenotazioniEsteticaDto>(this.url + "aggiornaPrenotazioneEstetica"
    ).subscribe(c =>
      this.prenotazioniEstetica = c.listaPrenotazioniEsteticaDto
    );
    this.showAdd = false;
    this.showDel = false;
    this.staiModificando = false;
    this.staiEliminando = false;
  }

  ShowForm() {
    this.showHidden = !this.showHidden;
  }
  //altro
  resetPreloader() {
    console.log("metodo resetPreloader");
    this.preloader = true;
    this.messaggio = "";
  }

}
