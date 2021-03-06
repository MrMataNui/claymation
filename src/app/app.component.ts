import { Component, OnInit } from '@angular/core';
// import { Particles } from './particles';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'Claymation';
	navLinks = ['Sculptures', 'Inktober', 'Videos'];

	getID = (item: string) => document.getElementById(item);
	lowerCase = (item: string) => item.toLowerCase();
	scrollFunction(navbar: HTMLElement, sticky: number) {
		if (window.pageYOffset >= sticky) {
			navbar.classList.add('sticky');
		} else {
			navbar.classList.remove('sticky');
		}
	}

	mobileLinks() {
		const myLinks = this.getID('myLinks');
		if (myLinks.style.display === 'block') {
			myLinks.style.display = 'none';
		} else {
			myLinks.style.display = 'block';
		}
	}

	mobileLinkClick() {
		 this.getID('myLinks')
		 	.style.display = 'none';
	}

	ngOnInit() {
		const navbar = document.getElementById('head-nav');
		const sticky = navbar.offsetTop;
		window.onscroll = () => this.scrollFunction(navbar, sticky);
	}
}
