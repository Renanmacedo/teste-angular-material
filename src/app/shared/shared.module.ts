import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessDialogComponent } from '../dialogs/success-dialog/success-dialog.component';
import { WarningDialogComponent } from '../dialogs/warning-dialog/warning-dialog.component';
import {
    MatDialogModule
    , MatButtonModule
} from '@angular/material'

import {FlexLayoutModule} from '@angular/flex-layout'
@NgModule({
  declarations: [
    SuccessDialogComponent
    ,WarningDialogComponent
  ],
  exports: [
    SuccessDialogComponent
    ,WarningDialogComponent
  ],
  entryComponents: [
    SuccessDialogComponent
    ,WarningDialogComponent
  ],
  imports: [
    CommonModule
    ,MatDialogModule
    ,FlexLayoutModule
    ,MatButtonModule
  ]
})
export class SharedModule { }
