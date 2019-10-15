import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'forms';

  navbarItems = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.setNavbarItems();
  }

  setNavbarItems(): void {
    this.navbarItems = [
      {label: 'Início',        url: '/'},
      {label: 'Form Template', url: '/forms/template'},
      {label: 'Form Reactive', url: '/forms/reactive'},
    ];
  }
 
  isRouteActived(route: string): boolean {
    return this.router.url === route;
  }

}
