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
      let cols = 1
      if ( matches ) {
        cols = 2;
      }
      return [
        { title: 'Pressure Washer', cols: cols, rows: 1, image: "https://images-na.ssl-images-amazon.com/images/I/91Or5s3f24L._AC_SL1500_.jpg", desc: "Pressure wash your deck"},
        { title: 'Drill Set', cols: cols, rows: 1, image: "https://images-na.ssl-images-amazon.com/images/I/91WzLZ1qASL._AC_SL1500_.jpg", desc: "Any project would be needed" },
        { title: 'Edger and Trimmer', cols: cols, rows: 1, image: "https://images-na.ssl-images-amazon.com/images/I/512jaAufjAL._AC_SL1000_.jpg", desc:"Trim your grass edge, make your lawn a clean look" },
        { title: 'Miter Saw', cols: cols, rows: 1, image: "https://images-na.ssl-images-amazon.com/images/I/71TPrh4okNL._AC_SL1500_.jpg", desc: "For small wood working projecsts" },
        { title: '22-foot telescoping ladder', cols: cols, rows: 1, image: "https://images-na.ssl-images-amazon.com/images/I/51M9J2MlE9S._AC_SL1000_.jpg", desc: "Easily anything on your first floor" },
        { title: '32-feet extension ladder', cols: cols, rows: 1, image: "https://images-na.ssl-images-amazon.com/images/I/31VJHN3H1JL._AC_.jpg", desc: "Reach your second floor" },

        { title: 'Service', cols: cols, rows: 1, image: "assets/ww-logo.svg", desc: "Weekend Warrior service" },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
