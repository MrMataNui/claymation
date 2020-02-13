import { Then, Before, When } from 'cucumber';
import { $, ElementFinder, ElementArrayFinder } from 'protractor';
import { AppPage } from '../pages/app';

const chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;
let AllWeeks: ElementFinder;
let app: AppPage;
Before(() => {
	app = new AppPage();
	app.beforeHand();
	AllWeeks = $('#AllWeeks');
 });

Then('I should see the header', () => {
	expect($('#header').getText())
		.to.eventually
		.equal('MrMataNui\'s Claymation Progress');
});

Then('there should be 3 weeks', () => {
	expect(AllWeeks.$$('[id^=Week]'))
		.to.eventually
		.have.lengthOf(3);
});

Then('there should be 21 days', () => {
	const eachWeek: ElementArrayFinder = AllWeeks.$$('[class^=Week]');
	expect(eachWeek)
		.to.eventually
		.have.lengthOf(3);

	expect(eachWeek.$$('[id$=Inktober]'))
		.to.eventually
		.have.lengthOf(21);
});

When('I click on day {int}', (int: number) => {
	$(`#day-${int}-Inktober #Inktober-day-${int}`).click();
});

Then('day {int}\'s image should be displayed', (int: number) => {
	let inktoberDay = $(`#description`).$(`.Inktober-day-${int}`);
	inktoberDay.getAttribute('class')
		.then(classList => { app.isSelected(classList, true); });
	AllWeeks
		.$$('[class^=Week]')
		.$$('div')
		.each(element => {
			element.getText().then(text => {
				const textNum = parseInt(text, 10);
				expect(textNum).to.be.a('number');
			});
		});
	app.visibility(inktoberDay.$('img#Inktober-Ring'));
	inktoberDay.$('.selected')
		.getText().then(item => {
			console.log('item', item);
			return item;
		});
	inktoberDay = inktoberDay.$('.selected').$('img#Inktober-Ring');
	// console.log('inktober1', inktober1);
	// tslint:disable-next-line:no-unused-expression
	expect(inktoberDay)
		.to.eventually.exist;
});
// https://play.howstuffworks.com/quiz/what-kind-wizard-are-you?utm_source=share-copy&utm_medium=referral
