import { Component } from '@angular/core';
import { TitleService } from '../app.services/core/utils/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _titleService: TitleService) {
    this._titleService.init();
  }
}
