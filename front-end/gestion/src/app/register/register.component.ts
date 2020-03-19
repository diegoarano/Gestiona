import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public _http: HttpClient, public _router:Router) { }

  data={"username": "",
        "email": "",
        "password": ""

};

  submit(){
    this._http.post("http://localhost:3000/registrarusuario", this.data)
    .subscribe((response)=>{
      this._router.navigateByUrl("/login")
    })
  }

  ngOnInit(): void {
  }

}
