import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InktoberComponent } from './inktober.component';

describe('InktoberComponent', () => {
	let component: InktoberComponent;
	let fixture: ComponentFixture<InktoberComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ InktoberComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(InktoberComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
