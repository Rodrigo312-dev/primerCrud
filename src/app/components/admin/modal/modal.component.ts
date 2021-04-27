import { NgForm } from '@angular/forms';
import { LibroInterface } from './../../../models/libro';
import { DataApiService } from './../../../services/data-api.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  @ViewChild('btnClose') btnClose: ElementRef;

  ngOnInit() {
  }

  onSaveLibro(libroForm: NgForm): void{
    if(libroForm.value.id === null){
      //nuevo
      this.dataApi.addLibro(libroForm.value);
    }else{
      //Actualizar
      this.dataApi.updateLibro(libroForm.value);
    }
    libroForm.resetForm();
    this.btnClose.nativeElement.click();
  }

}
