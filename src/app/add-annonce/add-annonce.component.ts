import { Component, OnInit, ɵɵpureFunction1 } from '@angular/core';
import { Annonce } from '../model/annonce';
import { AnnonceService } from '../services/annonce.service';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {

  constructor(private annonce:AnnonceService) { }

   annonces!:Annonce;
  ngOnInit(): void {
    this.annonces=new Annonce();}

    save(f:Annonce){
      this.annonce.ajouterAnnonce(this.annonces).subscribe(
      
        ()=>{console.log(f);}
      );
      }
  


      
  
}
