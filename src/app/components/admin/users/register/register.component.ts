import { Router } from '@angular/router';
import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
  public email:string = '';
  public password: string='';
  ngOnInit() {
  }

  onAddUser(){
    console.log(this.email);
    console.log(this.password);
    this.authService.registerUser(this.email,this.password)
    .then((res)=>{
      this.router.navigate(['admin/list-libros']);
    }).catch(err => console.log('err',err.message));
  }

}
