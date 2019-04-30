import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { CategoriaModalComponent } from '../categoria-modal/categoria-modal.component';

export interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-categria',
  templateUrl: './categria.component.html',
  styleUrls: ['./categria.component.css']
})
export class CategriaComponent implements OnInit {

  displayedColumns = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
  
  orderForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)])
    }) //vamos validar um grupo, chamamos o método abaixo
  }

  save(e) {
    console.log(e)
  }

  addItem(){
    const dialogRef = this.dialog.open(CategoriaModalComponent);
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe((data: any) => {
      if (typeof (data) !== 'undefined' && data) {
        console.log(data)
      }
    });
  }

}
