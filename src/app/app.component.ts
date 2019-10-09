import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'claymation';
	navlinks = (name: string) => `<a routerLink="/${name.toLowerCase()}" routerLinkActive="active">${name}</a>`
}
