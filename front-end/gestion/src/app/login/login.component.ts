import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data = {
    "username": "",
    "password": ""
  };

  submit(){
    this._http.post("http://localhost:3000/login", this.data)
      .subscribe((response) => {
        if (response["succes"] === "Bienvenido") {
          this._user.isLogged = true;
          document["cookie"] = `noisses=${response["token"]}`;
          this._router.navigateByUrl("/pedir")
        }

      })
  }



  constructor(public _http: HttpClient,public _user: UserService, public _router: Router) {

   

  }

  ngOnInit(): void {
  }

}
