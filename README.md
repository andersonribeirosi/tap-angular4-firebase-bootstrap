# tap-angular4-firebase-bootstrap

Angular 4 + firebase + bootstrap

INSTALAR O NODE e NPM

sudo -i apt install python-software-properties curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash - apt-get install nodejs

Angular CLI

npm install -g @angular/cli

Pasta angularFirebase

Depois criei a pasta angularFirebase

mkdir angularFirebase cd angularFirebase/ ng new cadastro-pessoa

ng serve browser http://localhost:4200 Pare o ng serve usando a combinação de teclas Ctrl+C

Criar componente com

ng g c CadastroPessoa g=gerar, c=componente Quando coloquei formulário com id (#f) na declaração #f="ngForm" deu uma tela em branco. Resolvi da seguinte maneira.

No início do arquivo app.module.ts, na área de import, adicionei essa linha: import { FormsModule } from '@angular/forms';

Depois, no mesmo arquivo, o imports no @NgModule ficou assim: imports: [ BrowserModule, FormsModule ],
