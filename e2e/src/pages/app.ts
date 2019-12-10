import { browser, protractor, ElementFinder } from 'protractor';
import { datesId, AllDates } from '../../../src/app/sculptures/description';

const chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;

export class AppPage {
	datesId: AllDates = datesId;
	beforeHand() {
		browser.waitForAngularEnabled(false);
		browser.sleep(500);
	}
	nav(link: string) { browser.get(link); }
	visibility(location: ElementFinder) {
		const EC = protractor.ExpectedConditions;
		browser.wait(EC.visibilityOf(location), 5000);
	}
	async hasClass(element: ElementFinder, className: string, bool: boolean) {
		const getClass = element.getAttribute('class');
		console.log('getClass', await getClass);
		if (bool) {
			expect(getClass)
				.to.eventually
				.include(className);
		} else {
			expect(getClass)
				.to.eventually.not
				.include(className);
		}
	}
}
