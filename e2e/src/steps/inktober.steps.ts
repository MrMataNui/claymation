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

When('I click on day {int}', (dayNum: number) => {
	$(`#day-${dayNum}-Inktober #Inktober-day-${dayNum}`).click();
});

Then('day {int}\'s image should be displayed', (dayNum: number) => {
	const inktoberDay = $(`#description`).$(`.Inktober-day-${dayNum}`);
	app.hasClass(inktoberDay, 'selected', true);
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
	// const inktober1 = await inktoberDay.$('.selected')
	// 	.getText().then(item => {
	// 		console.log('item', item);
	// 		return item;
	// 	});
	// console.log('inktober1', inktober1);
	// expect(inktober1.$('img#Inktober-Ring'))
	// 	.to.eventually.exist;
});
