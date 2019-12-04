import { browser, protractor, ElementFinder } from 'protractor';
import { datesId, AllDates } from '../../../src/app/sculptures/description';

export class AppPage {
	datesId: AllDates = datesId;
	beforeHand() {
		browser.ignoreSynchronization = true;
		browser.waitForAngular();
		browser.sleep(500);
	}
	nav(link: string) { browser.get(link); }
	visibility(location: ElementFinder) {
		const EC = protractor.ExpectedConditions;
		browser.wait(EC.visibilityOf(location), 5000);
	}
}
