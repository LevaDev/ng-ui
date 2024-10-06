import {
	AfterContentInit,
	Component,
	ContentChildren,
	Input,
	OnInit,
	QueryList,
	TemplateRef,
} from "@angular/core";
import { TemplateDirective } from "../api/public-api";

@Component({
	selector: "ats-card",
	templateUrl: "./card.component.html",
	styleUrl: "./card.component.scss",
})
export class CardComponent implements OnInit, AfterContentInit {
	@Input() title?: string;
	@Input() subTitle?: string;
	@Input() styleClass?: string;
	@Input() style?: any;
	@Input() titleTooltip?: string;
	@Input() tooltip?: string;
	@Input() showDragHandle?: boolean;

	@ContentChildren(TemplateDirective) templates?: QueryList<any>;

	headerTemplate?: TemplateRef<any>;

	titleTemplate?: TemplateRef<any>;

	subtitleTemplate?: TemplateRef<any>;

	actionsTemplate?: TemplateRef<any>;

	contentTemplate?: TemplateRef<any>;

	footerTemplate?: TemplateRef<any>;

	ngOnInit(): void {
		this.showDragHandle = this.showDragHandle ?? false;
		this.styleClass = this.styleClass || "";
	}

	ngAfterContentInit(): void {
		this.templates?.forEach((item) => {
			switch (item.getType()) {
				case "header":
					this.headerTemplate = item.template;
					break;

				case "title":
					this.titleTemplate = item.template;
					break;

				case "subtitle":
					this.subtitleTemplate = item.template;
					break;

				case "actions":
					this.actionsTemplate = item.template;
					break;

				case "content":
					this.contentTemplate = item.template;
					break;

				case "footer":
					this.footerTemplate = item.template;
					break;

				default:
					this.contentTemplate = item.template;
					break;
			}
		});
	}
}
