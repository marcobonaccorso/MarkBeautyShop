import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  storySubtitle = false;
  englishSubtitleWomanSection = false;

  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit(): void {
  }

  scrolla(){
    window.scrollTo(0, 960);
  }

  scroll() {
    window.scrollTo({
      top: 0,
    });
  }

  AreaUomo() { //prenotazione appuntamento
    this.router.navigateByUrl("/app-area-prenotazioni");
  }

  AreaDonna() {
    this.router.navigateByUrl("/app-sezione-donna");
  }


  AreaPersonale() { //vai all'area personale=>login
    this.router.navigateByUrl("/app-login");
  }

  SezioneAcquisti() {
    this.router.navigateByUrl("/app-sezione-acquisti");
  }

  MostraSottotitoliUomo() {
    this.storySubtitle = !this.storySubtitle;
  }

  MostraSottotitoliDonna() {
    this.englishSubtitleWomanSection = !this.englishSubtitleWomanSection;
  }

  mode(){
    let element = document.body;
    element.classList.toggle("dark-mode");
    console.log("cisono")
  }

}
