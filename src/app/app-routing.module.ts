import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesLibrosComponent } from './components/admin/detalles-libros/detalles-libros.component';
import { HomeComponent } from './components/admin/home/home.component';
import { ListLibrosComponent } from './components/admin/list-libros/list-libros.component';
import { OffersComponent } from './components/admin/offers/offers.component';
import { LoginComponent } from './components/admin/users/login/login.component';
import { Page404Component } from './components/admin/users/page404/page404.component';
import { ProfileComponent } from './components/admin/users/profile/profile.component';
import { RegisterComponent } from './components/admin/users/register/register.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'offers', component:OffersComponent},  // TODO: only user auth.
  {path:'libro/:id', component:DetallesLibrosComponent},
  {path:'admin/list-libros', component:ListLibrosComponent}, // TODO: only user auth.
  {path:'users/login', component:LoginComponent},
  {path:'users/register', component:RegisterComponent},
  {path:'users/profile', component:ProfileComponent}, // TODO: only user auth.
  {path:'**', component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
