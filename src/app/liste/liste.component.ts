import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../services/annonce.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
liste!:any;
  constructor(private s:AnnonceService) { }

  ngOnInit(): void {

    this.s.fetchAnnonce().subscribe(
      (r)=>{this.liste=r; }
    );
  }

}
