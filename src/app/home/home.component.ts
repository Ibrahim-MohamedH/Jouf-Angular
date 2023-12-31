import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  lang = '';

  constructor() {
    localStorage.setItem('lang', 'arabic');
  }
  changeToEn() {
    localStorage.setItem('lang', 'english');
    this.lang = 'english';
  }
}
