import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taglio-piega-donna',
  templateUrl: './taglio-piega-donna.component.html',
  styleUrls: ['./taglio-piega-donna.component.css']
})
export class TaglioPiegaDonnaComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  indietro(){
    this.router.navigateByUrl("/app-sezione-donna-servizi-parrucchieri");
  }
}
