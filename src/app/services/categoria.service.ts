import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoriaService {

    constructor(public http: HttpClient){}

    private categorias = [
        {item: 'Beach ball', cost: 4},
        {item: 'Towel', cost: 5},
        {item: 'Frisbee', cost: 2},
        {item: 'Sunscreen', cost: 4},
        {item: 'Cooler', cost: 25},
        {item: 'Swim suit', cost: 15},
        {item: 'Beach ball', cost: 4},
        {item: 'Towel', cost: 5},
        {item: 'Frisbee', cost: 2},
        {item: 'Sunscreen', cost: 4},
        {item: 'Cooler', cost: 25},
        {item: 'Swim suit', cost: 15},
        {item: 'Beach ball', cost: 4},
        {item: 'Towel', cost: 5},
        {item: 'Frisbee', cost: 2},
        {item: 'Sunscreen', cost: 4},
        {item: 'Cooler', cost: 25},
        {item: 'Swim suit', cost: 15},
    ]

    getCategorias(): any[] {
        return this.categorias
    }

    //busca paginada, se eu não informar a página será a zero e linhas por página 24
    find(page : number = 0, linesPerPage : number = 24) {
        return this.http.get(`http://localhost:8080/categorias/page?linesPerPage=${linesPerPage}&page=${page}`);
    }
} 