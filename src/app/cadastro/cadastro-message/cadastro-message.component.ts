import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MessageServices } from 'src/app/services/messages.services';
import { MessageModel } from 'src/model/messages.model';
import {Location} from '@angular/common'
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SuccessDialogComponent } from 'src/app/dialogs/success-dialog/success-dialog.component';
@Component({
  selector: 'app-cadastro-message'
  ,templateUrl: './cadastro-message.component.html'
  ,styleUrls: ['./cadastro-message.component.scss']
  ,providers: [MessageServices]
})
export class CadastroMessageComponent implements OnInit {
  formCadastro: FormGroup;
  assuntos: any[];
  private _maxLenthMessage: number = 500;
  private message: MessageModel = new MessageModel();
  private dialogConfig: MatDialogConfig;
  phoneMask = ['(',/\d/, /\d/,')', ' ',  /\d/, /\d/, /\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/];
  constructor(
    private fb: FormBuilder
    ,private messageService: MessageServices
    ,private location: Location
    ,private dialog: MatDialog
  ) { }

  ngOnInit() {
    this._initialize();
    this.dialogConfig = {
      height: '200px'
      ,width: '400px'
      ,disableClose: true
      ,data: { }
    }
  }

  _hasError = (field, error) => {
    return this.formCadastro.controls[field].hasError(error);
  }
  private _initialize(){
    this.formCadastro = this.fb.group({
      "email": [null, [Validators.required, Validators.email]]
      ,"nome": [null, [Validators.required]]
      ,"assunto": [null, [Validators.required]]
      ,"telefone": [null, [Validators.required]]
      ,"message": [null, [Validators.required, Validators.maxLength(this._maxLenthMessage)]]
    })
    this.messageService.getAssuntos().subscribe(
      response => this.assuntos = response
    , error => console.log(error))
  }
  /**
   * 
   */
  saveMessage(){
    
    this.message = {...this.formCadastro.value};

    this.message.createAt = new Date();
    this.message.id = this._genereteIds();

    this.message.assunto = this.assuntos[this.message.assunto];

    this.messageService.saveMessage(this.message)
      .subscribe( success => {
        let dialog = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
        dialog.componentInstance.message = "Mensagem cadastrada com sucesso!"
        dialog.afterClosed()
        .subscribe(result => {
          this.location.back();
        });
      }, error => this.location.back());
  }
  private _genereteIds(): number{
    return Math.floor( (Math.random() * 10 ) + 1 );
  }
  onKeydown(event){
    console.log(event);
  }
}
