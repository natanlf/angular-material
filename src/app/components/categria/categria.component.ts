import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatDialog, MatPaginator, PageEvent, MatTableDataSource, MatSort } from '@angular/material';
import { CategoriaModalComponent } from '../categoria-modal/categoria-modal.component';
import { CategoriaService } from 'src/app/services/categoria.service';

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

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<any>;
  pageEvent = new PageEvent();
  @ViewChild(MatSort) sort: MatSort;

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
    public dialog: MatDialog,
    private categoriaService: CategoriaService
    ) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)])
    }) //vamos validar um grupo, chamamos o método abaixo
  }

  searchClient() {
    this.pageEvent.pageIndex = 0;
    this.pageEvent.pageSize = 10;
    //this.getClientList(this.pageEvent);
  }

  save(e) {
    console.log(e)
  }

  getCategoriaList(event?: PageEvent){
    console.log(event)
    this.categoriaService.find(event.pageIndex, event.pageSize)
    .subscribe(
      resp => console.log(resp),
      error=>console.log(error))
  }

  /*getCategoriaList(event?: PageEvent) {
    this.service.filterWithPaging(event.pageIndex + 1, event.pageSize)
      .subscribe((x) => {
        this.dataSource = new MatTableDataSource<any>(x.data);
        this.pageEvent.length = x.totalRegisters;
        this.paginator.pageIndex = event.pageIndex;
      },
      error => {
        console.log(error)
      });
  }*/

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
