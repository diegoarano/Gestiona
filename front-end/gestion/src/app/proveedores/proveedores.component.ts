import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  constructor(public _route: ActivatedRoute, public _http: HttpClient, public _data: DataService, public _router: Router) {
    console.log("hola1")
    _data.getProveedores()
  }

  ngOnInit(): void {
  }

}
