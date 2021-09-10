import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sezione-acquisti',
  templateUrl: './sezione-acquisti.component.html',
  styleUrls: ['./sezione-acquisti.component.css']
})
export class SezioneAcquistiComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit(): void {
  }
  //Rotte
  indietro() { //torno alla home page
    this.router.navigateByUrl("/app-home-page");
  }
  elencoProdotti() { //vai alla lista dei prodotti
    this.router.navigateByUrl("/app-lista-prodotti");
  }
}
