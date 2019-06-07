import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroMessageComponent } from './cadastro-message/cadastro-message.component';
// form reactive
import { ReactiveFormsModule } from '@angular/forms'

// material 
import {
    MatCardModule
   , MatInputModule
   , MatSelectModule
   , MatFormFieldModule
   , MatButtonModule
   , MatDialogModule
} from '@angular/material';


// flex
import {FlexLayoutModule} from '@angular/flex-layout';
// text mask input
import {TextMaskModule} from 'angular2-text-mask'
// success component dialog
import { SuccessDialogComponent } from '../dialogs/success-dialog/success-dialog.component';
import { DirectiveModule } from '../directives/directives.module';
@NgModule({
  declarations: [
    CadastroMessageComponent
    ,SuccessDialogComponent
  ],
  entryComponents: [
    SuccessDialogComponent
  ]
  ,
  imports: [
    CommonModule
    , CadastroRoutingModule
    , ReactiveFormsModule
    , MatCardModule
    , MatInputModule
    , MatSelectModule
    , FlexLayoutModule
    , TextMaskModule
    , MatFormFieldModule
    , MatDialogModule
    ,MatButtonModule
    , DirectiveModule
  ]
})
export class CadastroModule { }
