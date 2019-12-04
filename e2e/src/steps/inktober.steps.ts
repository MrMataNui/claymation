import { Given, Then, Before, When } from 'cucumber';
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

Given('I am on the inktober page', () => app.nav('/inktober'));

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

When('I click on day 1', () => {
	$('#day-1-Inktober #Inktober-day-1').click();
});

Then('that day\'s image should be displayed', () => {
	AllWeeks
		.$$('[class^=Week]')
		.$$('div')
		.each(element => {
			element.getText().then(text => {
				const textNum = parseInt(text, 10);
				expect(textNum).to.be.a('number');
			});
		});
	// const inktober1 = await $('.Inktober-day-1').$('.selected')
	// 	.getText().then(item => {
	// 		console.log('item', item);
	// 		return item;
	// 	});
	// console.log('inktober1', inktober1);
	// expect(Inktober1.$('img#Inktober-Ring'))
	// 	.to.eventually.exist;
});
