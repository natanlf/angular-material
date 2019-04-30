import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-categoria-modal',
  templateUrl: './categoria-modal.component.html',
  styleUrls: ['./categoria-modal.component.css']
})
export class CategoriaModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close()
  }

  save(){
    this.dialogRef.close({key: "work"})
  }
}
