import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taglio-uomo',
  templateUrl: './taglio-uomo.component.html',
  styleUrls: ['./taglio-uomo.component.css']
})
export class TaglioUomoComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  indietro() {
    this.router.navigateByUrl("/app-area-prenotazioni");
  }
}
