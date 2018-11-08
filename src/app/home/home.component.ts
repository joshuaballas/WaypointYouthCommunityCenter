import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public mobile: boolean;

  constructor() { }

  ngOnInit() {
    if (window.screen.width >= 600) { this.mobile = true; }
  }

}
