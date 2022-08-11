import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annonce } from '../model/annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
 url='http://localhost:3000/annonces';
  constructor(private http:HttpClient) { }
fetchAnnonce()
{
return this.http.get(this.url);

}
ajouterAnnonce(a:Annonce){
return this.http.post(this.url,a);



}

}
