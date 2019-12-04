import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SculpturesComponent } from './sculptures.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SculpturesComponent', () => {
	let component: SculpturesComponent;
	let fixture: ComponentFixture<SculpturesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			declarations: [SculpturesComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SculpturesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
