import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-categria',
  templateUrl: './categria.component.html',
  styleUrls: ['./categria.component.css']
})
export class CategriaComponent implements OnInit {
  
  orderForm: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)])
    }) //vamos validar um grupo, chamamos o método abaixo
  }

  save(e) {
    console.log(e)
  }

}
