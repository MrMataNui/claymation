import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;
	let debugElement: DebugElement;
	let app: any;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			declarations: [AppComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		app = fixture.debugElement.componentInstance;
		debugElement = fixture.debugElement;
	});

	it('should create the app', () => {
		expect(app).toBeTruthy();
	});

	it(`should have as title 'Claymation'`, () => {
		expect(app.title).toEqual('Claymation');
	});

	it('should render title', () => {
		const compiled = debugElement.nativeElement;
		expect(compiled.querySelector('#header').textContent)
			.toContain('MrMataNui\'s Claymation Progress');
	});

	it('should have 7 links', () => {
		const myLinks = debugElement
			.nativeElement
			.querySelectorAll('#myLinks a');
		expect(myLinks.length).toEqual(7);
	});
});
