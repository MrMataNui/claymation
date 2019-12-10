import { Then, Before, When } from 'cucumber';
import { $ } from 'protractor';
import { AppPage } from '../pages/app';
import { AllDates } from '../../../src/app/sculptures/description';

const chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;
let app: AppPage;
let datesId: AllDates;
Before(() => {
	app = new AppPage();
	app.beforeHand();
	datesId = app.datesId;
});

Then('the year should be {int}', (date: number) => {
	expect($('#year-num').getText())
		.to.eventually
		.equal(date);
});

When('{string} is clicked on', (date: string) => { $(date).click(); });

Then('{string} should be selected', (date: string) => {
	datesId.y2019.forEach(loc => {
		if (loc.id === date) {
			app.hasClass($(`#${loc.id}`), 'selected', true);
		} else {
			app.hasClass($(`#${loc.id}`), 'selected', false);
		}
	});
});
