import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListeComponent } from './liste/liste.component';
import { EstimationCoutComponent } from './estimation-cout/estimation-cout.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
@NgModule({
  declarations: [
    AppComponent,
    ListeComponent,
    EstimationCoutComponent,
    LoginComponent,
    NavbarComponent,
    AddAnnonceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
