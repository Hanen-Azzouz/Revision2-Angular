import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  verifData(t:any)
  {console.log(t);
let email=t.email;
let pass=t.password;

if(email=='admin@admin.com' && pass=='123456'){
  this.router.navigate(['navigation']);
  console.log('test');
}

  }
}
