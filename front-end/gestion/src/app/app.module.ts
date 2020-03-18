import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import {Routes, RouterModule} from '@angular/router';
import {DataService} from './services/data.service';
import { PedirComponent } from './pedir/pedir.component';
import { PedidosComponent } from './pedidos/pedidos.component';

const RouterConfig: Routes =[
  {"path":"register", "component": RegisterComponent},
  {"path": "login", "component": LoginComponent},
  {"path":"pedir", "component":PedirComponent},
  {"path":"pedido", "component":PedidosComponent},

]


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PedirComponent,
    PedidosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig, {useHash:true})

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
