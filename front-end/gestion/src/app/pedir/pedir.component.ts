import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { from } from 'rxjs';
import { ActivatedRoute} from '@angular/router';

import{DataService} from "../services/data.service";


@Component({
  selector: 'app-pedir',
  templateUrl: './pedir.component.html',
  styleUrls: ['./pedir.component.css']
})
export class PedirComponent implements OnInit {

  constructor(public _route:ActivatedRoute,public _http: HttpClient, public _data: DataService , public _router:Router) { }

  data={

    "empleado":"",
    "proveedor":"",
    "concepto":"",
    "fecha":""


  };



  submit(){
    this._http.post("http://localhost:3000/hacerpedido", this.data)
    .subscribe((response)=>{
      this._router.navigateByUrl("/pedidos")
    })
  }

  ngOnInit(): void {
  }

}
