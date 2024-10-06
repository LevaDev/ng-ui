import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TooltipModule } from "../tooltip/public-api";
import { CardComponent } from "./card.component";

@NgModule({
	imports: [CommonModule, TooltipModule],
	declarations: [CardComponent],
	exports: [CardComponent],
})
export class CardModule {}
