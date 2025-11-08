import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'la-rueda-app';
    currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }
}
