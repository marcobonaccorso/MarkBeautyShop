import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaProdottiCapelliDto } from '../entities/lista-prodotti-capelli-dto';
import { ProdottoCapelli } from '../entities/prodotto-capelli';
import { ProdottoCapelliDto } from '../entities/prodotto-capelli-dto';

@Component({
  selector: 'app-lista-prodotti',
  templateUrl: './lista-prodotti.component.html',
  styleUrls: ['./lista-prodotti.component.css']
})
export class ListaProdottiComponent implements OnInit {

  prodotto = new ProdottoCapelli();
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


  constructor(private http: HttpClient, private router: Router) {
    this.aggiorna();
  }

  ngOnInit(): void {
  }
  //rotte
  indietro() { //torno alla sezione acquisti
    this.router.navigateByUrl("/app-sezione-acquisti");
  }
  //bottoni

  conferma(){}

  annulla(){}

  aggiungiProdotto() {
    let dto = new ProdottoCapelliDto();
    dto.prodottoCapelliDto = this.prodotto;
    this.http.post<ListaProdottiCapelliDto>(this.url + "aggiungiProdotto"
      , dto).subscribe(p =>
        this.prodotti = p.listaProdottiCapelliDto
      );
    this.prodotto = new ProdottoCapelli();
  }

  eliminaProdotto(prodottoDaEliminare: ProdottoCapelli) {
    let dto = new ProdottoCapelliDto();
    dto.prodottoCapelliDto = prodottoDaEliminare;
    this.http.post<ListaProdottiCapelliDto>(this.url + "eliminaProdotto"
      , dto).subscribe(p =>
        this.prodotti = p.listaProdottiCapelliDto
      );
    this.prodotto = new ProdottoCapelli();

  }

  modifica() { }

  ricerca(){}

  aggiorna() {
    this.http.get<ListaProdottiCapelliDto>(this.url + "aggiornaDatabase")
      .subscribe(p =>
        this.prodotti = p.listaProdottiCapelliDto
      );
  }

}
