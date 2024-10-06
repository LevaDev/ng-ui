import {
	Component,
	Directive,
	Input,
	NgModule,
	TemplateRef,
} from "@angular/core";

@Component({
	selector: "ats-header",
	standalone: true,
	template: "<ng-content></ng-content>",
})
export class HeaderComponent {}

@Component({
	selector: "ats-footer",
	standalone: true,
	template: "<ng-content></ng-content>",
})
export class FooterComponent {}

@Component({
	selector: "ats-content",
	standalone: true,
	template: ` <ng-content></ng-content>`,
})
export class ContentComponent {}

@Directive({
	standalone: true,
	selector: "[atsTemplate]",
})
export class TemplateDirective {
	@Input() type?: string;
	@Input("atsTemplate") name?: string;

	constructor(public template: TemplateRef<any>) {}

	getType(): string | undefined {
		return this.name;
	}
}

@NgModule({
	imports: [
		HeaderComponent,
		ContentComponent,
		FooterComponent,
		TemplateDirective,
	],
	exports: [
		HeaderComponent,
		ContentComponent,
		FooterComponent,
		TemplateDirective,
	],
})
export class SharedModule {}
