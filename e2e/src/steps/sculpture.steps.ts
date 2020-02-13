import { Then, Before, When } from 'cucumber';
import { $ } from 'protractor';
// import { hasClass } from 'protractor-helpers';
// const helpers = require('protractor-helpers');
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

Then('the year should be {int}', (int: number) => {
	expect(app.getUrl)
		.to.eventually
		.include(`/${int}`);
	// expect($('#year-num').getText())
	// 	.to.eventually
	// 	.equal(int);
});

When('{word} is clicked on', (month: string) => {
	const id = month
		.toLowerCase()
		.replace(/(^\w{3})/, '#2019$1');
	$(id).click();
});

Then('{word} should be selected', (month: string) => {
	const yearId = month
		.toLowerCase()
		.replace(/(^\w{3})/, '2019$1');
	datesId.y2019.forEach(loc => {
		const locId = `#${loc.id}`;
		const getClass = $(locId).getAttribute('class');
		if (loc.id === yearId) {
			expect(getClass)
				.to.eventually
				.include('selected');
		} else {
			expect(getClass)
				.to.eventually.not
				.include('selected');
		}
		$(`#${loc.id}`)
			.then(item => {
				if (loc.id === yearId) {
					console.log('item', item);
				} else {
					// app.isSelected(classList, false);
				}
			});
		// console.log('id', await $(locId).getAttribute('class'));
		// console.log('locId', locId);

		// $(locId).getAttribute('class')
		// 	.then(classList => {
		// 		console.log('classList', classList);
		// 		if (loc.id === yearId) {
		// 			app.isSelected(classList, true);
		// 		} else {
		// 			app.isSelected(classList, false);
		// 		}
		// 	});
	});
});
