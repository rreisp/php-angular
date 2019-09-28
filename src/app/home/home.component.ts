import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ebz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content = 'Welcome to EBAZAR,  PHP + Angular Application';

  constructor() { }

  ngOnInit() {
  }

}
