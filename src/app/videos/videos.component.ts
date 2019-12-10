import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-videos',
	templateUrl: './videos.component.html',
	styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
	constructor() {}
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
