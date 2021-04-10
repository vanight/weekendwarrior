import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-tools-dashboard',
  templateUrl: './tools-dashboard.component.html',
  styleUrls: ['./tools-dashboard.component.css'],
})
export class ToolsDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      let cols = 1;
      if (matches) {
        cols = 2;
      }
      return [
        {
          title: 'Pressure Washer(gas)',
          cols: cols,
          rows: 1,
          image:
            'https://images-na.ssl-images-amazon.com/images/I/91Or5s3f24L._AC_SL1500_.jpg',
          desc: 'It is time to Wash your yard or anything',
          price: '$30/week',
        },
        {
          title: 'Edger and Trimmer',
          cols: cols,
          rows: 1,
          image:
            'https://images-na.ssl-images-amazon.com/images/I/512jaAufjAL._AC_SL1000_.jpg',
          desc: 'Trim your grass edge with just a click',
          price: '$20/week',
        },
        {
          title: 'Nailer Gun',
          cols: cols,
          rows: 1,
          image:
            'https://images-na.ssl-images-amazon.com/images/I/51gokfO5USL._AC_SL1000_.jpg',
          desc: 'Easy to use for small project',
          price: '$20/week',
        },
        {
          title: 'Titan Impact 440 paint sprayer',
          cols: cols,
          rows: 1,
          image:
            'https://titantool.1scri.be/media/catalog/product/cache/b18383ece3cd1a2211c659793c25b122/0/3/03__impact_440_sk.png',
          desc: 'Professional paint spayer',
          price: '$50/week',
        },

        {
          title: 'Miter Saw',
          cols: cols,
          rows: 1,
          image:
            'https://images-na.ssl-images-amazon.com/images/I/71TPrh4okNL._AC_SL1500_.jpg',
          desc: 'For small woodworking projects, with a stand',
          price: '$30/week',
        },
        {
          title: 'Table Saw',
          cols: cols,
          rows: 1,
          image:
            'https://images.thdstatic.com/productImages/3f75b59d-b153-45fd-ad06-052296e477f1/svn/dewalt-portable-table-saws-dw745-64_600.jpg',
          desc: 'For small woodworking projects, with a stand',
          price: '$30/week',
        },
        {
          title: 'Drill Set',
          cols: cols,
          rows: 1,
          image:
            'https://images-na.ssl-images-amazon.com/images/I/91WzLZ1qASL._AC_SL1500_.jpg',
          desc: 'Any project would be needed',
          price: '$10/week',
        },
        {
          title: '22-foot telescoping ladder',
          cols: cols,
          rows: 1,
          image:
            'https://images-na.ssl-images-amazon.com/images/I/51M9J2MlE9S._AC_SL1000_.jpg',
          desc: 'A versitle ladder for anything',
          price: '$20/week',
        },
        {
          title: '32-feet extension ladder',
          cols: cols,
          rows: 1,
          image:
            'https://images-na.ssl-images-amazon.com/images/I/31VJHN3H1JL._AC_.jpg',
          desc: 'Can reach your roof',
          price: '$30/week',
        },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
