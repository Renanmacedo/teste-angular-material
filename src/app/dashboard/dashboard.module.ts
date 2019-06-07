import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardMessagesComponent } from './dashboard/dashboard.component';
import { MessageListComponent } from './message-list/message-list.component';
// material
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog'
import { MatIconModule} from '@angular/material/icon'
// pipes
import { EllipsisPipe } from '../pipe/ellipsis.pipe';

// flex layout
import {FlexLayoutModule} from '@angular/flex-layout'
import { SuccessDialogComponent } from '../dialogs/success-dialog/success-dialog.component';
import { WarningDialogComponent } from '../dialogs/warning-dialog/warning-dialog.component';

@NgModule({
  declarations: [
      DashboardMessagesComponent
      ,MessageListComponent
      ,EllipsisPipe
      ,WarningDialogComponent
    ],
  imports: [
    CommonModule
    ,DashboardRoutingModule
    ,MatSidenavModule
    ,MatListModule
    ,MatCardModule
    ,MatButtonModule
    ,FlexLayoutModule
    ,MatDialogModule
    ,MatIconModule
  ]
})
export class DashboardModule { }
