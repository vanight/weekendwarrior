import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'weekendwarrior';
  defaultElevation = 2;
  raisedElevation = 8;

  name = 'Angular';

  constructor(public router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-R246TZGZM5', {
          'page_path': event.urlAfterRedirects,
        });
      }
    });
  }
}
