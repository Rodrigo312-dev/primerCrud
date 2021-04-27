import { UserInterface } from './../../../../models/user';
import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService) { }
  user: UserInterface={
    name:'',
    email:''
  };
  public providerID: string ='null';
  ngOnInit() {
    this.authService.isAuth().subscribe(user =>{
      if(user){
        this.user.name = user.displayName;
        this.user.email = user.email;
      }
    })
  }

}
