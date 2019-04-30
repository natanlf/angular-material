import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-categoria-modal',
  templateUrl: './categoria-modal.component.html',
  styleUrls: ['./categoria-modal.component.css']
})
export class CategoriaModalComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(public dialogRef: MatDialogRef<any>, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  close(){
    this.dialogRef.close()
  }

  save(){
    if(this.firstFormGroup.valid && this.secondFormGroup.valid){
      this.dialogRef.close({key: "work"})
    }else {
      console.log("Preencha os dados")
    }
    
  }
}
