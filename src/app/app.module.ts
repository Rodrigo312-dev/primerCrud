import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListLibrosComponent } from './components/admin/list-libros/list-libros.component';
import { DetallesLibrosComponent } from './components/admin/detalles-libros/detalles-libros.component';
import { HeroComponent } from './components/admin/hero/hero.component';
import { HomeComponent } from './components/admin/home/home.component';
import { ModalComponent } from './components/admin/modal/modal.component';
import { NavbarComponent } from './components/admin/navbar/navbar.component';
import { OffersComponent } from './components/admin/offers/offers.component';
import { LoginComponent } from './components/admin/users/login/login.component';
import { ProfileComponent } from './components/admin/users/profile/profile.component';
import { RegisterComponent } from './components/admin/users/register/register.component';
import { Page404Component } from './components/admin/users/page404/page404.component';
import {FormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
@NgModule({
  declarations: [
    AppComponent,
    ListLibrosComponent,
    DetallesLibrosComponent,
    HeroComponent,
    HomeComponent,
    ModalComponent,
    NavbarComponent,
    OffersComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
