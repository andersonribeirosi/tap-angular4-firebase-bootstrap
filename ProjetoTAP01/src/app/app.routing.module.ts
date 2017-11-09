import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './login/login-form/login-form.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { HomeComponent } from './home/home.component';
import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';
import { NavbarAdmComponent } from './navbar-adm/navbar-adm.component';

const APP_ROUTES: Routes = [
{ path: '', component: HomeComponent},
{ path: 'cadastro', component: CadastroPessoaComponent },
{ path: 'login', component: LoginFormComponent  },
{ path: 'cad-usuario', component: CadUsuarioComponent  },
{ path: 'navbar-adm', component: NavbarAdmComponent  }
]

@NgModule({
imports: [RouterModule.forRoot(APP_ROUTES)],
exports: [RouterModule]
})
export class AppRoutingModule { }