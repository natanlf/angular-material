import { Component, OnInit } from '@angular/core';
import {Sort} from '@angular/material/sort';

export interface Node {
  clienteNome: string,
  assuntoNome: string,
  modalidade: string,
  faturador: string,
  total: number 
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  node: Node[] = [
    { clienteNome: "Lojas Americanas", assuntoNome:  "Conselhos de Sócios", modalidade: "FF", faturador: "TAB", total: 2000},
    { clienteNome: "Olympique", assuntoNome:  "IBA 2019", modalidade: "FF", faturador: "SRRJ15", total: 3000},
    { clienteNome: "Aniela Jordan", assuntoNome:  "Tributária", modalidade: "FF", faturador: "ABC", total: 5000},
    { clienteNome: "Banco Santander", assuntoNome:  "Relcamações Especiais", modalidade: "PF", faturador: "ANI", total: 1000},
    { clienteNome: "Ponto Frio", assuntoNome:  "Narrativa mock", modalidade: "FF", faturador: "ABC", total: 2000}
  ]

  sortedData: Node[];

  constructor() {
    this.sortedData = this.node.slice();
  }

  sortData(sort: Sort) {
    const data = this.node.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'clienteNome': return compare(a.clienteNome, b.clienteNome, isAsc);
        case 'assuntoNome': return compare(a.assuntoNome, b.assuntoNome, isAsc);
        case 'modalidade': return compare(a.modalidade, b.modalidade, isAsc);
        case 'faturador': return compare(a.faturador, b.faturador, isAsc);
        case 'total': return compare(a.total, b.total, isAsc);
        default: return 0;
      }
    });
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
