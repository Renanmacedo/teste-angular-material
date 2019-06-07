import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: ''
    ,loadChildren: './dashboard/dashboard.module#DashboardModule'
  }
  ,{
    path: 'cadastro'
    ,loadChildren: './cadastro/cadastro.module#CadastroModule'
  }  
  ,{
    path: ''
    ,redirectTo: ''
    ,pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
