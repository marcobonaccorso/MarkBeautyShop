import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appuntamento } from '../entities/appuntamento';
import { AppuntamentoDto } from '../entities/appuntamento-dto';
import { ListaAppuntamentiDto } from '../entities/lista-appuntamenti-dto';

@Component({
  selector: 'app-area-personale',
  templateUrl: './area-personale.component.html',
  styleUrls: ['./area-personale.component.css']
})
export class AreaPersonaleComponent implements OnInit {

  appuntamento = new Appuntamento();
  appuntamenti: Appuntamento[] = [];
  url = "http://localhost:8080/";

  constructor(private http: HttpClient, private router: Router) {
    this.aggiorna();
  }


  ngOnInit(): void {
  }

  indietro() {
    this.router.navigateByUrl("/app-home-page");
  }

  aggiungiAppuntamento() {
    let dto = new AppuntamentoDto();
    dto.appuntamentoDto = this.appuntamento;
    this.http.post<ListaAppuntamentiDto>(this.url + "aggiungiAppuntamento"
      , dto).subscribe(s =>
        this.appuntamenti = s.listaAppuntamentiDto
      );
    this.appuntamento = new Appuntamento();
  }

  eliminaAppuntamento(a: Appuntamento) {
    let dto = new AppuntamentoDto();
    dto.appuntamentoDto = a;
    this.http.post<ListaAppuntamentiDto>(this.url + "eliminaAppuntamento"
      , dto).subscribe(s =>
        this.appuntamenti = s.listaAppuntamentiDto
      );
    this.appuntamento = new Appuntamento();
  }

  aggiorna() {
    this.http.get<ListaAppuntamentiDto>(this.url + "aggiornaDb"
    ).subscribe(s =>
      this.appuntamenti = s.listaAppuntamentiDto
    );
    this.appuntamento = new Appuntamento();
  }

}
