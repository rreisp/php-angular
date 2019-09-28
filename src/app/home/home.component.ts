import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ebz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  welcome = 'Seja bem vinda(o) ao EBAZAR';
  message = 'PHP + Angular Application';
  constructor() { }

  ngOnInit() {
  }

}
