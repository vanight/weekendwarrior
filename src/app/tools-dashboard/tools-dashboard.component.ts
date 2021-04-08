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
        { title: 'Miter Saw', cols: 1, rows: 1, image: "https://images-na.ssl-images-amazon.com/images/I/71TPrh4okNL._AC_SL1500_.jpg", desc: "For small wood working projecsts" },
        { title: 'Pressure Washer', cols: 1, rows: 1, image: "https://images-na.ssl-images-amazon.com/images/I/91Or5s3f24L._AC_SL1500_.jpg", desc: "Pressure wash your deck"},
        { title: 'Drill Set', cols: 1, rows: 1, image: "https://images-na.ssl-images-amazon.com/images/I/91WzLZ1qASL._AC_SL1500_.jpg", desc: "Any project would be needed" },
        { title: 'Edger and Trimmer', cols: 1, rows: 1, image: "https://images-na.ssl-images-amazon.com/images/I/512jaAufjAL._AC_SL1000_.jpg", desc:"Trim your grass, once a year" }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
