import { Given, Then, Before } from 'cucumber';
import { $, ElementFinder } from 'protractor';
import { AppPage } from '../pages/app';
import { AllDates } from '../../../src/app/sculptures/description';

const chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;
let app: AppPage;
let datesId: AllDates;
let hasClass: (elm: ElementFinder, cls: string, bool: boolean) => void;
Before(() => {
	app = new AppPage();
	app.beforeHand();
	datesId = app.datesId;
	hasClass = (elm: ElementFinder, cls: string, bool: boolean): void => {
		const getClass = elm.getAttribute('class');
		if (bool) {
			expect(getClass).to.include(cls);
		} else {
			expect(getClass).to.not.include(cls);
		}
	};
});

Given('I am on the sculpture page', () => app.nav('/sculptures'));

Then('the year should be 2019', () => {
	expect($('#year-num').getText())
		.to.eventually
		.equal('2019');
});

Then('2019jan should be selected', () => {
	datesId.y2019.forEach(loc => {
		if (loc.id === '2019jan') {
			hasClass($(`#${loc.id}`), 'selected', true);
		} else {
			hasClass($(`#${loc.id}`), 'selected', false);
		}
	});
});
