import { browser, protractor, ElementFinder } from 'protractor';
import { datesId, AllDates } from '../../../src/app/sculptures/description';
// zyx1w1

const chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;

export class AppPage {
	datesId: AllDates = datesId;
	nav(link: string) { browser.get(link); }
	getUrl() { browser.getCurrentUrl(); }

	beforeHand() {
		browser.waitForAngularEnabled(false);
		browser.sleep(500);
	}
	visibility(location: ElementFinder) {
		const EC = protractor.ExpectedConditions;
		browser.wait(EC.visibilityOf(location), 5000);
	}

	isSelected(classList: string, bool: boolean) {
		if (bool) {
			expect(classList).to.include('selected');
		} else {
			expect(classList).to.not.include('selected');
		}
	}
}
