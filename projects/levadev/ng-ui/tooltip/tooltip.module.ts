import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TooltipModule as PTooltipModule } from "primeng/tooltip";
import { TooltipComponent } from "./tooltip.component";

@NgModule({
	imports: [CommonModule, PTooltipModule],
	declarations: [TooltipComponent],
	exports: [TooltipComponent]
})
export class TooltipModule {}
