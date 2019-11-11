import { Component, OnInit } from '@angular/core';
import { datesId, getMonths } from './description';

@Component({
	selector: 'app-sculptures',
	templateUrl: './sculptures.component.html',
	styleUrls: ['./sculptures.component.css']
})
export class SculpturesComponent implements OnInit {
	constructor() {}

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

	Rgx(item: string, title: string, replacement: string) {
		const rgx = ['\\w{3}', '20\\d\\d'];
		let sendRegex: string;
		switch (title) {
			case 'year': sendRegex = `${rgx[0]}(${rgx[1]})`; break;
			case 'month': sendRegex = `(${rgx[0]})${rgx[1]}`; break;
			case 'monthId': sendRegex = `(${rgx[0]})(${rgx[1]})`; break;
		}
		return item.replace(RegExp(sendRegex), replacement);
	}

	queryAll = (item: string) => document.querySelectorAll(item);
	query = (item: string) => document.querySelector(item);

	capitalizeFLetter = (item: string) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
	capital = (name: string) => name.split('-').map(this.capitalizeFLetter).join(' ');
	regExp = (item: string): RegExp => new RegExp(item);

	monthId = (item: string) => this.Rgx(item, 'monthId', '$2$1');
	getYear = (item: string) => this.Rgx(item, 'year', '$1');
	getMonth(item: string, getType: string) {
		switch (getType) {
			case 'month.date': return item.replace(/\w+ (\d+<sup>\w+<\/sup>)/, '$1');
			case 'monthName':
				const findMonth = Object.entries(this.monthNames);
				for (const [key, month] of findMonth) {
					if (key === this.Rgx(item, 'month', '$1')) { return month; }
				}
		}
	}

	monthClick(event: any) {
		const getID = (item: string) => document.getElementById(item);
		const id = event.target.id;
		for (const datesItem of this.queryAll('#dates div')) { datesItem.classList.remove('selected'); }
		for (const monthsItem of this.queryAll('#months li')) { monthsItem.classList.remove('selected'); }
		getID(id).classList.add('selected');
		getID('months').children[id].classList.add('selected');
		this.getHide({ month: true });
	}

	yearChange(event: any) {
		const yearNum: Element = this.query('#date2019 #year-num');
		const date: string = event.target.id;
		const getYears: number[] = [2019, 2020];
		let getNumber: number = parseInt(yearNum.innerHTML.trim(), 10);

		const previousCheck: boolean = (getYears.includes(getNumber - 1));
		const followingCheck: boolean = (getYears.includes(getNumber + 1));
		if (date === 'previous-year' && previousCheck) { getNumber--; }
		if (date === 'following-year' && followingCheck) { getNumber++; }

		yearNum.innerHTML = getNumber.toString();
		this.getHide({ year: `y${getNumber}` });
	}

	getHide(timeType: { year?: string; month?: boolean; }) {
		const getId: string = (timeType.year) ? '[id^="y20"]' : 'li[id^="20"]';
		const getDiv = this.queryAll(getId);
		for (const divLoc of getDiv) {
			divLoc.classList.add('none');
			if (timeType.year && timeType.year === divLoc.id) {
				divLoc.classList.remove('none');
			} else if (timeType.month && /selected/.test(divLoc.classList.value)) {
				divLoc.classList.remove('none');
			}
		}
	}

	ngOnInit() {}

	ngAfterViewInit() {
		this.getHide({ year: 'y2019' });
		this.getHide({ month: true });
	}
}
