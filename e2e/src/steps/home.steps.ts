import { Given, Then, When, Before } from 'cucumber';
import { $$, $ } from 'protractor';
import { AppPage } from '../pages/app';

const chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;
let app: AppPage;
Before(() => {
	app = new AppPage();
	app.beforeHand();
 });

Given('I am on the {word} page', (word: string) => {
	switch (word) {
		case 'home': app.nav('/'); break;
		case 'Sculpture': app.nav('/sculpture/2019'); break;
		default: app.nav(`/${word}`); break;
	}
});

When('I do nothing', () => {});

Then('I should see the title', () => {
	const mainTitle = $('#main-title');
	app.visibility(mainTitle);
	expect(mainTitle.getText())
		.to.eventually
		.equal('Claymation');
});

Then('the navbar should have {int} links', (int: number) => {
	expect($$('#myLinks a'))
		.to.eventually
		.have.lengthOf(int);
});
