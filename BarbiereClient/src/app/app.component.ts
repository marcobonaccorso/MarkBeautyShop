import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*
  prenotazione: area prenotazioni=> si riferisce alla tabella che sta nell'area per prendere appuntamento
  appuntamenti: area personale=>si riferisce alla tabella dell'area personale
  
  */

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigateByUrl("/app-home-page");
  }
}
