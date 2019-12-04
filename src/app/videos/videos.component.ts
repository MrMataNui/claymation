import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SecurityContext } from '@angular/core';

@Component({
	selector: 'app-videos',
	templateUrl: './videos.component.html',
	styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

	sanitize: SafeResourceUrl;
	contextUrl: number;
	constructor(private sanitizer: DomSanitizer) {
		this.sanitize = this.sanitizer.sanitize;
		this.contextUrl = SecurityContext.URL;
	}

	videos = [
		{
			desc: 'This is my most recet video',
			src: 'https://www.youtube.com/embed/8aFaKblSNww'
		},
		{
			desc: 'This is my first practice video',
			src: 'https://www.youtube.com/embed/UEgYQPAcB3k'
		},
	];
	ngOnInit() { /* loadVideoById('J7Ms3Z_JhkY', 0); */ }
}
