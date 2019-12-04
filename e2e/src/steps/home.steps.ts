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

Given('I am on the home page', () => app.nav('/'));

When('I do nothing', () => {});

Then('I should see the title', () => {
	const mainTitle = $('#main-title');
	app.visibility(mainTitle);
	expect(mainTitle.getText())
		.to.eventually
		.equal('Claymation');
});

Then('should render title', () => {
	expect($('#header').getText())
		.to.eventually
		.equal('MrMataNui\'s Claymation Progress');
});

Then('the navbar should have 7 links', () => {
	expect($$('#myLinks a b'))
		.to.eventually
		.have.lengthOf(3);
});
