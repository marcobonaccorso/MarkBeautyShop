import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CriterioRicercaDto } from '../entities/criterio-ricerca-dto';
import { ListaPrenotazioniParrucchiereDto } from '../entities/lista-prenotazioni-parrucchiere-dto';
import { PrenotazioneParrucchiere } from '../entities/prenotazione-parrucchiere';
import { PrenotazioneParrucchiereDto } from '../entities/prenotazione-parrucchiere-dto';
import { RicercaAppuntamentoParrucchiereDto } from '../entities/ricerca-appuntamento-parrucchiere-dto';
import { ToastrService } from 'ngx-toastr';

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

  //Rotte

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
        this.eliminaPrenotazione();
        break;
      default:
        console.log("Transizione inattesa!");
    }
  }


  annulla() {
    console.log("siamo nello stato annulla");
    this.toastr.show('Operazione annullata.');
    this.prenotazioneParrucchiere = this.prenotazionePrecedente;
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
    this.prenotazioneParrucchiere = new PrenotazioneParrucchiere();
  }



  modifica(pr: PrenotazioneParrucchiere) {
    console.log("siamo nello stato di modifica");
    this.stato = "M";
    this.toastr.warning('Stai modificando un dato.');
    this.prenotazioneParrucchiere = Object.assign({}, pr);
    console.log("Stai modificando un dato.");
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

  elimina(pre: PrenotazioneParrucchiere) {
    this.stato = "R";
    this.toastr.warning('Stai eliminando un dato.');
    this.prenotazioneParrucchiere = pre;
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
    this.toastr.success('Prenotazione effettuata.');
    this.stato = "A";
    this.prenotazioneParrucchiere = new PrenotazioneParrucchiere();
    this.prenotazionePrecedente = new PrenotazioneParrucchiere();
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

  ShowForm() {
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
    this.notFoundSearch = false;
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
    this.showSearch = false;
    this.noSearch = false;
    this.noMod = false;
    this.notFoundSearch = false;
}

  aggiungiPrenotazioneParrucchiere() {
    console.log("siamo in aggiungiPrenotazione");
    let dto = new PrenotazioneParrucchiereDto();
    dto.prenotazioneParrucchiereDto = this.prenotazioneParrucchiere;
    if (this.prenotazioneParrucchiere.cliente == "" || this.prenotazioneParrucchiere.dataPrenotazione == null
      || this.prenotazioneParrucchiere.ora == "" || this.prenotazioneParrucchiere.tipoDiServizio == "") {
      console.log("errore: form non compilato correttamente");
      this.toastr.error('Errore:form non compilato correttamente.');
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
      this.http.post<ListaPrenotazioniParrucchiereDto>(this.url + "aggiungiPrenotazioneParrucchiere"
        , dto).subscribe(c =>
          this.prenotazioniParrucchiere = c.listaPrenotazioniParrucchiereDto
        );
      this.toastr.success('Prenotazione effettuata.');
      this.prenotazioneParrucchiere = new PrenotazioneParrucchiere();
      this.showAdd = true;
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
    let dto = new PrenotazioneParrucchiereDto();
    dto.prenotazioneParrucchiereDto = this.prenotazioneParrucchiere;
    console.log("Inizia la modifica");
    if (this.prenotazioneParrucchiere.cliente == "" ||
      this.prenotazioneParrucchiere.dataPrenotazione == null ||
      this.prenotazioneParrucchiere.ora == "" ||
      this.prenotazioneParrucchiere.tipoDiServizio == "") {
      console.log("errore: impossibile modificare");
      this.toastr.error('Errore:Impossibile effettuare questa operazione.')
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
      this.http.post<ListaPrenotazioniParrucchiereDto>(this.url + "modificaPrenotazioneParrucchiere"
        , dto).subscribe(c => {
          this.prenotazioniParrucchiere = c.listaPrenotazioniParrucchiereDto
          this.stato = "V";
        });
      this.toastr.success('Modifica effettuata.');
      this.prenotazioneParrucchiere = new PrenotazioneParrucchiere();
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

  eliminaPrenotazione() {
    console.log("siamo nel metodo deletePrenotazione");
    let dto = new PrenotazioneParrucchiereDto();
    dto.prenotazioneParrucchiereDto = this.prenotazioneParrucchiere;
    this.http.post<ListaPrenotazioniParrucchiereDto>(this.url + "eliminaPrenotazioneParrucchiere"
      , dto).subscribe(c => {
        this.prenotazioniParrucchiere = c.listaPrenotazioniParrucchiereDto
        this.stato = "V";
      });
    this.toastr.success('Eliminazione effettuata.');
    this.prenotazioneParrucchiere = new PrenotazioneParrucchiere();
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
    let criterioRicercaAppuntamentoParrucchiere = new RicercaAppuntamentoParrucchiereDto();
    criterioRicercaAppuntamentoParrucchiere.ricercaAppuntamentoParrucchiereDto = this.cerca;
    if (this.cerca=="") {
      console.log("Errore: il campo di ricerca è vuoto.");
      this.toastr.error('Errore: il campo di ricerca è vuoto');
    } else {
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
  }
  //altro
  resetPreloader() {
    console.log("metodo resetPreloader");
    this.preloader = true;
    this.messaggio = "";
  }

}
