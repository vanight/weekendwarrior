import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  navLinks = [
    {name:"Tools to rental", routerName:"item", icon:"list"},
    {name:"Contact", routerName:"contact", icon:"contact_mail"},
    {name:"Payment", routerName:"payment", icon:"payment"},
    {name:"About", routerName:"about", icon:"info"},
  ]

  constructor(private breakpointObserver: BreakpointObserver) {}

}
