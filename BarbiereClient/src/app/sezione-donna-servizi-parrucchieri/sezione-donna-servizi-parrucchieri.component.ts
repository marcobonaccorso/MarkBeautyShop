import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sezione-donna-servizi-parrucchieri',
  templateUrl: './sezione-donna-servizi-parrucchieri.component.html',
  styleUrls: ['./sezione-donna-servizi-parrucchieri.component.css']
})
export class SezioneDonnaServiziParrucchieriComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  indietro() { //torno alla home page
    this.router.navigateByUrl("/app-sezione-donna");
  }

  PrenotaParrucchiere() {
    this.router.navigateByUrl("/app-gestione-appuntamento-parrucchiere");
  }

  VediColori() {
    this.router.navigateByUrl("/app-area-colori");
  }

  VediTagli() {
    this.router.navigateByUrl("/app-taglio-piega-donna");
  }
}
