import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-colori',
  templateUrl: './area-colori.component.html',
  styleUrls: ['./area-colori.component.css']
})
export class AreaColoriComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  indietro() { //torno alla sezione donna servizi parrucchieri
    this.router.navigateByUrl("/app-sezione-donna-servizi-parrucchieri");
  }
}
