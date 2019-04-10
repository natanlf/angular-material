import { Component, OnInit, NgModule } from '@angular/core';
import { namespaceHTML } from '@angular/core/src/render3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  showFiller = false;
  panelOpenState = false;

  nome=""
  idade=""
  dataSource=[]

  displayedColumns: string[] = ['nome', 'idade'];

  names = []

  constructor() { }

  ngOnInit() {
  } 
  
  save() {
    this.names.push({nome: this.nome, idade: this.idade})
    this.dataSource = this.names;
  }

}
