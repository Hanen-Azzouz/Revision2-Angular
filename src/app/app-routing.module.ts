import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import { EstimationCoutComponent } from './estimation-cout/estimation-cout.component';
import { ListeComponent } from './liste/liste.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'list',component:ListeComponent},
  {path:'cout',component:EstimationCoutComponent},
  {path:'ajouterAnnonce',component:AddAnnonceComponent},
  {path:'navigation', component:NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
