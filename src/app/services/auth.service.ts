import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afsAuth: AngularFireAuth) { }

  registerUser(email: string, pass: string){
    return new Promise ((resolve, reject)=> {
      this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData)),
      err => reject(err);
    })
  }
  loginEmailUser(email: string, pass: string){
    return new Promise((resolve, reject)=>{
      this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
      .then( userData => resolve(userData),
      err => reject(err));
    })
  }
  logoutUser(){
    return this.afsAuth.auth.signOut();
  }
  isAuth(){
    return this.afsAuth.authState.pipe(map(auth => auth));
  }
}
