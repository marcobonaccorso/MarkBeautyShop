import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit(): void {
  }


  entra() { //login=> area personale
    this.router.navigateByUrl("/app-area-personale");
  }
  
  cancel() {
    this.router.navigateByUrl("/app-login");

  }
}
