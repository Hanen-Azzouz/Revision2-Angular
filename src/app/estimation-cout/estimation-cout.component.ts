import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estimation-cout',
  templateUrl: './estimation-cout.component.html',
  styleUrls: ['./estimation-cout.component.css']
})
export class EstimationCoutComponent implements OnInit {
  msg='';
  constructor() { }

  ngOnInit(): void {
  }
  estimation(t:any)
{ 
     let p=t.position;
     let nb=t.nbre;
     console.log(nb);
     console.log(p);
  if (p == 'haut' && nb <= 30) {
      console.log('test');
      this.msg= 'le cout de votre article est a 10 D';}
   
  else  if (p == 'haut' && nb > 30) {
    this.msg = 'le cout de votre article est a 20 D';
    
  }
  if (p == 'bas' && nb <= 30) 
     {this.msg = 'le cout de votre article est a 5 D';} 
  else if (p == 'bas' && nb > 30) 
     {
       this.msg = 'le cout de votre article est a 15 D'; }

}
}
