import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import {Routes, RouterModule} from '@angular/router';
import {DataService} from './services/data.service';
import { PedirComponent } from './pedir/pedir.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { UserService } from './services/user.service';

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
   FormsModule,
    RouterModule.forRoot(RouterConfig, {useHash:true}),
    HttpClientModule

  ],
  providers: [DataService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
