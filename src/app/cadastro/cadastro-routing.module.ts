import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroMessageComponent } from './cadastro-message/cadastro-message.component';

const routes: Routes = [
  {
    path: ''
    ,component: CadastroMessageComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CadastroRoutingModule { }
