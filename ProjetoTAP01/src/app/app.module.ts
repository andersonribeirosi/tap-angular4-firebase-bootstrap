
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2/index';
import { FirebaseConfig } from './firebase.config';

import { CadastroPessoaModule } from './cadastro-pessoa/cadastro-pessoa.module';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginModule } from './login/login.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';
import { NavbarAdmComponent } from './navbar-adm/navbar-adm.component';
import { HomeAdmComponent } from './home-adm/home-adm.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CadUsuarioComponent,
    NavbarAdmComponent,
    HomeAdmComponent
        
  ],
  imports: [
  BrowserModule,
	FormsModule,
  HttpModule,
  CadastroPessoaModule,
  
  AngularFireModule.initializeApp(FirebaseConfig),
  AppRoutingModule,
  LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }