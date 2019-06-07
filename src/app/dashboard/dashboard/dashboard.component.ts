import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MessageModel } from 'src/model/messages.model';
import { MessageServices } from 'src/app/services/messages.services';
import {Location} from '@angular/common'
import {Router} from '@angular/router'
import {MatDialog, MatDialogConfig} from '@angular/material/dialog'
import { SuccessDialogComponent } from 'src/app/dialogs/success-dialog/success-dialog.component';
@Component({
  selector: 'app-dashboard'
  ,templateUrl: './dashboard.component.html'
  ,styleUrls: ['./dashboard.component.scss']
  ,providers: [MessageServices]
})
export class DashboardMessagesComponent implements OnInit, OnDestroy {
  

  private messages: Array<MessageModel>;
  private _messageServiceList: any;
  private dialogConfig: MatDialogConfig;
  constructor(
    private messagesServices: MessageServices
    ,private location: Location
    ,private router: Router
    ,private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.initialize();
  }
  initialize(){
    this._messageServiceList = this.messagesServices.getAllMessages().subscribe(
      messages => {
        let o = {};
        this.messages = [...messages]
        this.messages.sort((a, b) => b.createAt.getTime() - a.createAt.getTime())
      }
    , error => console.log(error));
    this.dialogConfig = {
      height: '200px'
      ,width: '400px'
      ,disableClose: true
      ,data: { }
    }
  }
  excluirMessage(message){
    this.messagesServices.deleteMessage(message.id).subscribe(
      success=> {
        let dialog = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
        dialog.componentInstance.message = "Mensagem excluída com sucesso!"
        dialog.afterClosed()
          .subscribe(() => this.location.go(""))
      }
    , error => console.info('error'))
  }

  ngOnDestroy(): void {
    this._messageServiceList.unsubscribe();
  }
}
