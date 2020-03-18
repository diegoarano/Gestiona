import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public _http: HttpClient) { }

  data={"username": "",
        "email": "",
        "password": ""

};

  submit(){
    this._http.post("http://localhost:3000/registrarusuario", this.data)
    .subscribe((response)=>{
      console.log(response)
    })
  }

  ngOnInit(): void {
  }

}
