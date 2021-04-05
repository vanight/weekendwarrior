import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weekendwarrior';
  defaultElevation = 2;
  raisedElevation = 8;

  name = 'Angular';
}
