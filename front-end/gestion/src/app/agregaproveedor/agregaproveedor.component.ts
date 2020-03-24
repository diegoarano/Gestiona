import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-agregaproveedor',
  templateUrl: './agregaproveedor.component.html',
  styleUrls: ['./agregaproveedor.component.css']
})
export class AgregaproveedorComponent implements OnInit {

  data = {
    "nombre": "",
    "direccion": "",
    "nif": "",
    "contacto": "",
    "categoria": ""
 
  }


  constructor(public _route: ActivatedRoute, public _http: HttpClient, public _data: DataService, public _router: Router) { }
 
 
  submit() {
    console.log("hoho")
    this._http.post("http://localhost:3000/agregarproveedor", this.data)
      .subscribe((response) => {
        this._router.navigateByUrl("/proveedores")
      })
  }


  ngOnInit(): void {
  }

}
