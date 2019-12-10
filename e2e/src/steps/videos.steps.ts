import { Then, Before } from 'cucumber';
import { $$ } from 'protractor';
import { AppPage } from '../pages/app';

const chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;
let app: AppPage;
Before(() => {
	app = new AppPage();
	app.beforeHand();
});

Then('there should be {int} videos', (num: number) => {
	expect($$('#videos iframe'))
		.to.eventually
		.have.lengthOf(num);
});
