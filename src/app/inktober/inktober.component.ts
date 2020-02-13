import { Component, OnInit } from '@angular/core';
import { prompts } from './descriptions';

@Component({
	selector: 'app-inktober',
	templateUrl: './inktober.component.html',
	styleUrls: ['./inktober.component.css']
})
export class InktoberComponent implements OnInit {
	constructor() {}
	objectKeys = Object.keys;
	prompts = prompts;
	getWeeks = {
		Week1: [1, 2, 3, 4, 5, 6, 7],
		Week2: [8, 9, 10, 11, 12, 13, 14],
		Week3: [15, 16, 17, 18, 19, 20, 21],
		// Week4: [22, 23, 24, 25, 26, 27, 28],
		// Week5: [29, 30, 31]
	};

	queryAll = (item: string) => document.querySelectorAll(item);

	inktoberTest = (item: string, prompt: string): string => {
		const regex = (/(day)0(\d)/.test(item))
			? /(day)0(\d)/ : /(day)(\d+)/;
		return item.replace(regex, prompt);
	}
	inktoberClasses = (item: string): string => this.inktoberTest(item, 'Inktober-$1-$2');
	inktoberNames = (item: string): string => this.inktoberTest(item, 'The prompt for $1 $2');
	weekNames = (name: string): string => name.replace(/(Week)(\d+)/, '$1 $2');

	inktoberClick(event: any) {
		const id: string = (event.target.children[0])
			? event.target.children[0].id
			: event.target.id;

		for (const getItem of this.queryAll('[class^=Inktober-day]')) {
			getItem.classList.remove('selected');
		}
		for (const getItem of this.queryAll(`div.${id}`)) {
			getItem.classList.add('selected');
		}
	}

	ngOnInit() {}
}
