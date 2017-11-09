import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-pessoa-form',
  templateUrl: './cadastro-pessoa-form.component.html',
  styleUrls: ['./cadastro-pessoa-form.component.css']
})
export class CadastroPessoaFormComponent implements OnInit {
  
  constructor(
    private angularFire: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private router: Router) { }
 
  ngOnInit() {}

  form_submit(f: NgForm) {
    this.angularFire.list("pessoas").push(
      {
      nome: f.controls.nome.value,
      sobrenome: f.controls.sobrenome.value,
      email: f.controls.email.value,
      telefone: f.controls.telefone.value
      }
      ).then(t => {
      f.controls.nome.setValue('');
      f.controls.sobrenome.setValue('');
      f.controls.email.setValue('');
      f.controls.telefone.setValue('');
      alert('Cadastro realizado com sucesso!');
  })
}

  form_logout(){
    this.afAuth.auth.signOut();
    this.router.navigate([""]);
  }
  
  }