import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  miApi: string = "http://localhost:3000";
  pedidos: any = [];
  proveedores: any = [];

  constructor(public _http: HttpClient) {
    let httpConfig: object = {
      "headers": new HttpHeaders({
        "content-type": "application/json"
      })
    }
  }

  getPedidos() {
    this._http.get(`${this.miApi}/verpedidos`)
      .subscribe((responseApi) => {
        this.pedidos = responseApi
        console.log(responseApi)
      })
  }

  getProveedores() {
    this._http.get(`${this.miApi}/allproveedores`)
      .subscribe((responseApi) => {
        this.proveedores = responseApi
        console.log(responseApi)
      })
  }



}
