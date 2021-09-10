import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sezione-donna',
  templateUrl: './sezione-donna.component.html',
  styleUrls: ['./sezione-donna.component.css']
})
export class SezioneDonnaComponent implements OnInit {
  url = "http://localhost:8080/";

  constructor(private http: HttpClient, private router: Router) {
    this.aggiorna();
  }

  ngOnInit(): void {
  }

  //rotte
  indietro() {
    this.router.navigateByUrl("/app-home-page");
  }

  SezioneDonnaServiziParrucchieri() {
    this.router.navigateByUrl("/app-gestione-appuntamento-parrucchiere");

  }

  sezioneDonnaServiziEstetica() {
    this.router.navigateByUrl("/app-gestione-appuntamenti-estetica");
   }

  //metodi
  aggiorna() { }

}
