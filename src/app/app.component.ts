import { Component, OnInit } from '@angular/core';
// import { Particles } from './particles';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'Claymation';
	navLinks = [
		'Sculptures',
		'Inktober',
		'Videos'
	];

	lowerCase = (item: string) => item.toLowerCase();
	scrollFunction(navbar: HTMLElement, sticky: number) {
		if (window.pageYOffset >= sticky) {
			navbar.classList.add('sticky');
		} else {
			navbar.classList.remove('sticky');
		}
	}
	ngOnInit() {
		const navbar = document.getElementById('head-nav');
		const sticky = navbar.offsetTop;
		window.onscroll = () => this.scrollFunction(navbar, sticky);
	}
}
