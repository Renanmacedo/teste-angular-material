import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardMessagesComponent} from './dashboard/dashboard.component'
import { MessageListComponent } from './message-list/message-list.component';
const routes: Routes = [
  {
    path: ''
    ,component: DashboardMessagesComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
