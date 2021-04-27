import { LibroInterface } from './../../../models/libro';
import { DataApiService } from './../../../services/data-api.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-list-libros',
  templateUrl: './list-libros.component.html',
  styleUrls: ['./list-libros.component.css']
})
export class ListLibrosComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private libros : LibroInterface[] = [];

  ngOnInit() {
    this.getListLibros();
  }

  getListLibros(){
    this.dataApi.getAllLibros().subscribe(libros => {
      this.libros = libros;
    });
  }

  onDeleteLibro(idLibro: string): void{
    console.log('DELETE BOOK');
    const confirmar = confirm('Esta Seguro?');
    if(confirmar){
      this.dataApi.deleteLibro(idLibro);
    }
  }

  onPreUpdateLibro(libro: LibroInterface){
    this.dataApi.selectedLibro = Object.assign({}, libro);
  }
}
