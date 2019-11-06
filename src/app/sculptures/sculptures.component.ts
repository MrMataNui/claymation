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

	regExp = (item: string): RegExp => new RegExp(item);
	getYear = (item: string) => item.replace(/(\w{3})(20\d\d)/, '$1');
	getMonth = (item: string, getType: string) => {
		switch (getType) {
			case 'month.date': return item.replace(/\w+ (\d+<sup>\w+<\/sup>)/, '$1');
			case 'monthName':
				for (const month in this.monthNames) {
					if (month === item.replace(/(\w{3})(20\d\d)/, '$1')) {
						return this.monthNames[month];
					}
				}
			}
	}

	monthId = (item: string) => item.replace(/(\w+)(20\d\d)/, '$2$1');
	queryAll = (item: string) => document.querySelectorAll(item);
	query = (item: string) => document.querySelector(item);

	capital(name: string) {
		const capitalizeFLetter = (item: string) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
		const nameArr = name.split('-');
		// tslint:disable-next-line:forin
		for (const i in nameArr) { nameArr[i] = capitalizeFLetter(nameArr[i]); }
		return nameArr.join(' ');
	}

	monthClick(event: any) {
		const getID = (item: string) => document.getElementById(item);
		const id = event.target.id;
		for (const datesItem of this.queryAll('#dates div')) { datesItem.classList.remove('selected'); }
		for (const monthsItem of this.queryAll('#months li')) { monthsItem.classList.remove('selected'); }
		getID(id).classList.add('selected');
		getID('months').children[id].classList.add('selected');
		this.monthHide();
	}

	yearChange(event: any) {
		const yearNum: Element = this.query('#date2019 #year-num');
		const date = event.target.id;
		const getYears = [2019, 2020];
		let getNumber: number = parseInt(yearNum.innerHTML.trim(), 10);

		const previousCheck: boolean = (getYears.includes(getNumber - 1));
		const followingCheck: boolean = (getYears.includes(getNumber + 1));
		if (date === 'previous-year' && previousCheck) { getNumber--; }
		if (date === 'following-year' && followingCheck) { getNumber++; }

		yearNum.innerHTML = getNumber.toString();
		this.yearHide(`y${getNumber}`);
	}

	yearHide(yearNum: string) {
		const yearDiv = this.queryAll('[id^="y20"]');
		for (const divLoc of yearDiv) {
			divLoc.classList.add('none');
			if (divLoc.id === yearNum) {
				divLoc.classList.remove('none');
			}
		}
	}

	monthHide() {
		const monthDiv = this.queryAll('li[id^="20"]');
		for (const divLoc of monthDiv) {
			divLoc.classList.add('none');
			if (/selected/.test(divLoc.classList.value)) {
				divLoc.classList.remove('none');
			}
		}
	}

	ngOnInit() {}

	ngAfterViewInit() {
		this.yearHide('y2019');
		this.monthHide();
	}
}
