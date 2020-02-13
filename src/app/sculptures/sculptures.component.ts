import { Component, OnInit } from '@angular/core';
import { datesId, getMonths } from './description';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-sculptures',
	templateUrl: './sculptures.component.html',
	styleUrls: ['./sculptures.component.css']
})
export class SculpturesComponent implements OnInit {
	yearNum: number;
	yearStr: string;
	parentRouteId: number;
	private sub: any;

	constructor(private router: Router, private route: ActivatedRoute) {}

	objectKeys = Object.keys;
	datesId = datesId;
	getMonths = getMonths;
	monthNames = {
		jan: 'January',
		feb: 'February',
		mar: 'March',
		apr: 'April',
		may: 'May',
		jun: 'June',
		jul: 'July',
		aug: 'August',
		sep: 'September',
		oct: 'October',
		nov: 'November',
		dec: 'Decenber'
	};

	Rgx(item: string, title: string) {
		let replacement: string;
		switch (title) {
			case 'year': replacement = '$2'; break;
			case 'month': replacement = '$1'; break;
			case 'monthId': replacement = '$2$1'; break;
		}
		return item.replace(/(\w{3})(20\d{2})/, replacement);
	}

	queryAll = (item: string) => document.querySelectorAll(item);
	query = (item: string) => document.querySelector(item);

	capitalizeFLetter = (item: string) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
	capital = (name: string) => name.split('-').map(this.capitalizeFLetter).join(' ');
	regex = (item: string): RegExp => new RegExp(item);

	monthId = (item: string) => this.Rgx(item, 'monthId');
	getYear = (item: string) => this.Rgx(item, 'year');
	getMonth(item: string, getType: string) {
		switch (getType) {
			case 'month.date': return item.replace(/\w+ (\d+<sup>\w+<\/sup>)/, '$1');
			case 'monthName':
				const findMonth = Object.entries(this.monthNames);
				for (const [key, month] of findMonth) {
					if (key === this.Rgx(item, 'month')) {
						return month;
					}
				}
		}
	}

	monthClick(event: any) {
		const getID = (item: string) => document.getElementById(item);
		const id = event.target.id;
		const removeClass = (item: string) => {
			for (const newItem of this.queryAll(item)) {
				newItem.classList.remove('selected');
			}
		};
		removeClass('#dates div');
		removeClass('#months li');
		getID(id).classList.add('selected');
		getID('months').children[id].classList.add('selected');
		this.getHide({ month: true });
	}

	getHide(timeType: { year?: string; month?: boolean; }) {
		const getId: string = (timeType.year) ? '[id^="y20"]' : 'li[id^="20"]';
		for (const divLoc of this.queryAll(getId)) {
			const yearCheck: boolean = (timeType.year === divLoc.id);
			const monthCheck: boolean = /selected/.test(divLoc.classList.value);
			divLoc.classList.add('none');
			switch (true) {
				case timeType.year && yearCheck:
				case timeType.month && monthCheck:
					divLoc.classList.remove('none');
			}
		}
	}

	ngOnInit() {
		this.sub = this.route
			.params.subscribe(params => {
				this.yearNum = +params.year;
				this.yearStr = `y${params.year}`;
			});
	}

	ngOnDestroy() { this.sub.unsubscribe(); }

	ngAfterViewInit() {
		this.getHide({ year: this.yearStr });
		this.getHide({ month: true });
	}
}
