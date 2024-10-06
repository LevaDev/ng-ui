import { Component, Input } from "@angular/core";

type TooltipPosition = "right" | "left" | "top" | "bottom";

@Component({
	selector: "ats-tooltip",
	styleUrl: "./tooltip.component.scss",
	template: `<i
		[pTooltip]="tooltipText"
		[tooltipPosition]="position"
		class="pi pi-info-circle tooltip-icon"
	></i>`,
})
export class TooltipComponent {
	@Input() tooltipText?: string;
	@Input() position: TooltipPosition = "bottom";
}
