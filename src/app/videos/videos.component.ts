import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-videos',
	templateUrl: './videos.component.html',
	styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
	constructor() {}
	width = 560;
	height = 315;
	playlists = [
		{
			desc: 'This is the playlist for my claymation videos',
			src: 'https://www.youtube.com/embed/videoseries?list=PLO4tFL7VmzZAaVC2prUAsSLVtLIr2URqo'
		},
	];
	videos = [
		{
			desc: 'This is my most recet video',
			src: 'https://www.youtube.com/embed/fm-lnv0H9u0'
		},
		{
			desc: 'This is my first practice video',
			src: 'https://www.youtube.com/embed/UEgYQPAcB3k'
		},
	];
	ngOnInit() { /* loadVideoById('J7Ms3Z_JhkY', 0); */ }
}
