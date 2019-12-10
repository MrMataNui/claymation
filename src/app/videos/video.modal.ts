import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export interface FindYT {
	loading: number;
	loaded: number;
	PlayerState?: any;
	ready?: (a: any) => void;
	setConfig?: (a: any) => void;
	Player?: (a: any, b: any) => void;
}
@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
	constructor(private sanitizer: DomSanitizer) {}
	transform(url) {
		return this.sanitizer.bypassSecurityTrustResourceUrl(url);
	}
}
