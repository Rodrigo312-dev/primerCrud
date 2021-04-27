import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LibroInterface } from './../models/libro';
import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs:AngularFirestore) { 
    this.librosCollection = afs.collection<LibroInterface>('libros');
    this.libros = this.librosCollection.valueChanges();
  }
  private librosCollection: AngularFirestoreCollection<LibroInterface>;
  private libros: Observable<LibroInterface[]>;
  private libroDoc: AngularFirestoreDocument<LibroInterface>;
  private libro: Observable<LibroInterface>;
  public selectedLibro: LibroInterface = {
    id: null
  };

  getAllLibros(){
    return this.libros = this.librosCollection.snapshotChanges()
    .pipe(map(changes=>{
      return changes.map(action =>{
        const data = action.payload.doc.data() as LibroInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }
  getOneLibro(idBook: string){
    this.libroDoc = this.afs.doc<LibroInterface>(`libros/${idBook}`);
    return this.libro = this.libroDoc.snapshotChanges().pipe(map(action =>{
      if(action.payload.exists ===false){
        return null;
      }else{
        const data = action.payload.data() as LibroInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }
  addLibro(libro: LibroInterface): void{
    this.librosCollection.add(libro);
  }
  updateLibro(libro: LibroInterface): void{
    let idLibro = libro.id;
    this.libroDoc = this.afs.doc<LibroInterface>(`libros/${idLibro}`);
    this.libroDoc.update(libro);
  }
  deleteLibro(idLibro: string): void{
    this.libroDoc = this.afs.doc<LibroInterface>(`libros/${idLibro}`);
    this.libroDoc.delete();
  }

}
