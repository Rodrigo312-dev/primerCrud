import { LibroInterface } from './../../../models/libro';
import { DataApiService } from './../../../services/data-api.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-detalles-libros',
  templateUrl: './detalles-libros.component.html',
  styleUrls: ['./detalles-libros.component.css']
})
export class DetallesLibrosComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
  public libro: LibroInterface = {};

  ngOnInit() {
    const idLibro = this.route.snapshot.params['id'];
    this.getDetail(idLibro);
  }

  getDetail(idLibro:string):void{
    this.dataApi.getOneLibro(idLibro).subscribe(libro=>{
      this.libro = libro;
    });
  }
}
