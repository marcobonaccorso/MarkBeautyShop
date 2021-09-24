import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaProdottiCapelliDto } from '../entities/lista-prodotti-capelli-dto';
import { ProdottoCapelli } from '../entities/prodotto-capelli';
import { ToastrService } from 'ngx-toastr';
import { ProdottoCapelliDto } from '../entities/prodotto-capelli-dto';
import { RicercaProdottoDto } from '../entities/ricerca-prodotto-dto';

@Component({
  selector: 'app-lista-prodotti',
  templateUrl: './lista-prodotti.component.html',
  styleUrls: ['./lista-prodotti.component.css']
})
export class ListaProdottiComponent implements OnInit {

  prodotto = new ProdottoCapelli();
  prodottoPrecedente = new ProdottoCapelli();
  prodotti: ProdottoCapelli[] = [];
  url = "http://localhost:8080/";
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


  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.aggiorna();
  }

  ngOnInit(): void {
  }
  //rotte
  indietro() { //torno alla sezione acquisti
    this.router.navigateByUrl("/app-sezione-acquisti");
  }
  //bottoni

  conferma() {
    console.log("siamo in conferma");
    this.noAdd = false;
    this.showAdd = false;
    this.showDel = false;
    this.showSearch = false;
    this.noMod = false;
    this.noSearch = false;
    this.notFoundSearch = false;
    switch (this.stato) {
      case "A":
        this.statoAggiungiProdotto();
        break;
      case "M":
        this.salvaModifica();
        break;
      case "R":
        this.deleteProdotto();
        break;
      default:
        console.log("Transizione inattesa!");
    }
  }

  annulla() {
    console.log("siamo nello stato annulla");
    this.prodotto = this.prodottoPrecedente;
    this.stato = "V";
    this.toastr.show('operazione annullata.');
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
    this.prodotto = new ProdottoCapelli();
  }

  modifica(pr: ProdottoCapelli) {
    console.log("siamo nello stato di modifica");
    this.stato = "M";
    this.toastr.warning('Stai modificando un dato');
    this.prodotto = Object.assign({}, pr);
    this.prodottoPrecedente = pr;
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
  statoAggiungiProdotto() {
    console.log("siamo nello stato aggiungi");
    this.stato = "A";
    this.prodotto = new ProdottoCapelli();
    this.prodottoPrecedente = new ProdottoCapelli();
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

  elimina(pre: ProdottoCapelli) {
    this.toastr.warning('Stai eliminando un dato');
    this.stato = "R";
    this.prodotto = pre;
    this.prodottoPrecedente = pre;
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

  aggiungiProdotto() {
    let dto = new ProdottoCapelliDto();
    dto.prodottoCapelliDto = this.prodotto;
    if (this.prodotto.nome == "" || this.prodotto.prezzo == null
    ) {
      this.toastr.error('errore: form non compilato correttamente');
      console.log("errore: form non compilato correttamente");
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
      this.http.post<ListaProdottiCapelliDto>(this.url + "aggiungiProdotto"
        , dto).subscribe(p =>
          this.prodotti = p.listaProdottiCapelliDto
        );
      this.prodotto = new ProdottoCapelli();
      this.toastr.success('Prodotto aggiunto con successo');
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
      this.aggiorna();

    }
  }

  deleteProdotto() {
    console.log("siamo nel meotodo elimina prodotto");
    let dto = new ProdottoCapelliDto();
    dto.prodottoCapelliDto = this.prodotto;
    this.http.post<ListaProdottiCapelliDto>(this.url + "eliminaProdotto"
      , dto).subscribe(p => {
        this.prodotti = p.listaProdottiCapelliDto;
        this.stato = "V";
      });
    this.prodotto = new ProdottoCapelli();
    this.preloader = false;
    this.showAdd = false;
    this.showNoMod = false;
    this.showMod = false;
    this.noMod = false;
    this.staiModificando = false;
    this.staiEliminando = false;
    this.showDel = true;
    this.toastr.error('prodotto eliminato con successo');
    this.noAdd = false;
    this.showNoDel = false;
    this.noSearch = false;
    this.showSearch = false;
    this.notFoundSearch = false;

  }

  salvaModifica() {
    console.log("siamo nel metodo modifica");
    let dto = new ProdottoCapelliDto();
    dto.prodottoCapelliDto = this.prodotto;
    if (this.prodotto.nome == "" || this.prodotto.prezzo == null
    ) {
      console.log("errore: impossibile modificare se il form è vuoto.");
      this.toastr.error('errore: impossibile modificare se il form è vuoto.');
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
    }
    else {
      this.http.post<ListaProdottiCapelliDto>(this.url + "modificaProdotto"
        , dto).subscribe(c => {
          this.prodotti = c.listaProdottiCapelliDto;
          this.stato = "V";
        });
      this.prodotto = new ProdottoCapelli();
      this.aggiorna();
      this.preloader = false;
      this.toastr.success('operazione avvenuta con successo');
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

  ricerca() {
    console.log("siamo nel metodo ricerca");
    let ricercaProdotto = new RicercaProdottoDto();
    ricercaProdotto.ricercaProdottoDto = this.search;
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
      this.http.post<ListaProdottiCapelliDto>(this.url + "cercaProdotto"
        , ricercaProdotto).subscribe(c => {
          this.prodotti = c.listaProdottiCapelliDto;
          this.stato = "V";
        });
      this.prodotto = new ProdottoCapelli();
      this.aggiorna();
      this.preloader = false;
      this.toastr.success('ricerca avvenuta con successo');
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
  }

  aggiorna() {
    this.http.get<ListaProdottiCapelliDto>(this.url + "aggiornaDatabase")
      .subscribe(p =>
        this.prodotti = p.listaProdottiCapelliDto
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

}
