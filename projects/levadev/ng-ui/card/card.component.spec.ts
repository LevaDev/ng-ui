import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TooltipModule } from "@ariasc/angular-ui/tooltip";
import { CardComponent } from "./card.component";
import { TemplateRef } from "@angular/core";

describe("WidgetComponent", () => {
	let component: CardComponent;
	let fixture: ComponentFixture<CardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [TooltipModule],
			declarations: [CardComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(CardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it('should render the title when provided', () => {
    component.title = 'Test Title';
    fixture.detectChanges();

    const titleElement = fixture.nativeElement.querySelector('h2');
    expect(titleElement).toBeTruthy();
    expect(titleElement.textContent).toContain('Test Title');
  });

	it('should render the tooltip when tooltip or titleTooltip is provided', () => {
    component.tooltip = 'Test Tooltip';
    fixture.detectChanges();

    const tooltipElement = fixture.nativeElement.querySelector('ats-tooltip');
    expect(tooltipElement).toBeTruthy();
    expect(tooltipElement.getAttribute('ng-reflect-tooltip-text')).toBe('Test Tooltip');
  });

	it('should render the header template when provided', () => {
    const headerTemplate = {} as TemplateRef<any>;
    component.headerTemplate = headerTemplate;
    fixture.detectChanges();

    const headerContainer = fixture.nativeElement.querySelector('.card-header');
    expect(headerContainer).toBeTruthy();
  });

	it('should render the footer template when provided', () => {
    const footerTemplate = {} as TemplateRef<any>;
    component.footerTemplate = footerTemplate;
    fixture.detectChanges();

    const footerContainer = fixture.nativeElement.querySelector('.card-footer');
    expect(footerContainer).toBeTruthy();
  });

	it('should apply the style and styleClass inputs', () => {
		component.styleClass = 'custom-class';
		component.style = { color: 'red' };
		fixture.detectChanges();

		const cardElement = fixture.nativeElement.querySelector('.component.card');
		expect(cardElement.classList).toContain('custom-class');
		expect(cardElement.style.color).toBe('red');
	});
});
