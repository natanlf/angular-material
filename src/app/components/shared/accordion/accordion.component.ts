import { Component, Input } from "@angular/core";

@Component({
    selector: "app-accordion",
    templateUrl: "./accordion.component.html",
    styleUrls: ["./accordion.component.scss"]
})
export class AccordionComponent {
    panelOpenState = false;
    @Input() title = "Title";
    @Input() titleColor = "#263238";
    @Input() description = "Description";
    @Input() descriptionColor = "#263238";
    @Input() colorCard = "#FFF";
}