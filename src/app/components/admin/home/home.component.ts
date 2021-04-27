import { DataApiService } from './../../../services/data-api.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public libros =[];
  public libro = '';

  ngOnInit() {
    this.dataApi.getAllLibros().subscribe(libros =>{
      console.log('Libros', libros);
      this.libros = libros;
    })
  }

}
