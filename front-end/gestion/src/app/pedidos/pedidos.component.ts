import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(public _route: ActivatedRoute, public _http: HttpClient, public _data: DataService, public _router: Router) {
    console.log("hola")
    _data.getPedidos()
  }

  formataFecha(fecha: string) {

    let convertedDate = new Date(fecha.toLocaleString());

    let datestring = convertedDate.getDate() + "/" + (convertedDate.getMonth() + 1) + "/" + convertedDate.getFullYear();
    


    return datestring;
  }




  ngOnInit(): void {
  }

}
