import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sezione-donna-servizi-estetica',
  templateUrl: './sezione-donna-servizi-estetica.component.html',
  styleUrls: ['./sezione-donna-servizi-estetica.component.css']
})
export class SezioneDonnaServiziEsteticaComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  indietro() { //torno alla home page
    this.router.navigateByUrl("/app-sezione-donna");
  }

  VaiAPrenotare(){
    this.router.navigateByUrl("/app-gestione-appuntamenti-estetica");
  }
}
