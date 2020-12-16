import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {

  @Input() label: string = "Title" //Usamos input pois ambos vão poder ser informados de fora do componente input
  @Input() name: string = "nome";
  @Input() errorMessage: string;
  @Input() required: boolean = false;
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      nome : [this.name, [this.required ? Validators.required : '']]
    });
  }


}
