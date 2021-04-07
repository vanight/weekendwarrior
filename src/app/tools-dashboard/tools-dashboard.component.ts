import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-tools-dashboard',
  templateUrl: './tools-dashboard.component.html',
  styleUrls: ['./tools-dashboard.component.css']
})
export class ToolsDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {

      return [
        { title: 'Card 1', cols: 1, rows: 1, image: "https://images.pexels.com/photos/162534/grinder-hitachi-power-tool-flexible-162534.jpeg?auto=compress" },
        { title: 'Card 2', cols: 1, rows: 1, image: "https://images.pexels.com/photos/162534/grinder-hitachi-power-tool-flexible-162534.jpeg?auto=compress" },
        { title: 'Card 3', cols: 1, rows: 1, image: "https://images.pexels.com/photos/162534/grinder-hitachi-power-tool-flexible-162534.jpeg?auto=compress" },
        { title: 'Card 4', cols: 1, rows: 1, image: "https://images.pexels.com/photos/162534/grinder-hitachi-power-tool-flexible-162534.jpeg?auto=compress" }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
