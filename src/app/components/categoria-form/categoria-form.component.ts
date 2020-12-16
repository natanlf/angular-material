import { Component } from '@angular/core';

@Component({
    selector: "categoria-form",
    templateUrl: "./categoria-form.component.html",
    styleUrls: ["./categoria-form.component.scss"]
})
export class CategoriaFormComponent {

    validatorsNome = {
        required: true,
        regex: null
    }

    validatorsEmail = {
        required: true,
        regex: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    }

}