import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MessageModel } from 'src/model/messages.model';
import { MessageServices } from 'src/app/services/messages.services';
import {Location} from '@angular/common'
import {Router} from '@angular/router'
@Component({
  selector: 'app-dashboard'
  ,templateUrl: './dashboard.component.html'
  ,styleUrls: ['./dashboard.component.scss']
  ,providers: [MessageServices]
})
export class DashboardMessagesComponent implements OnInit, OnDestroy {
  

  private messages: Array<MessageModel>;
  private _messageServiceList: any;
  constructor(
    private messagesServices: MessageServices
    ,private location: Location
    ,private router: Router
  ) { }

  ngOnInit() {
    this.initialize();
  }
  initialize(){
    this._messageServiceList = this.messagesServices.getAllMessages().subscribe(
      messages => {
        this.messages = [...messages]
      }
    , error => console.log(error))
  }
  excluirMessage(message){
    this.messagesServices.deleteMessage(message.id).subscribe(
      success=> {}
    , error => console.info('error'))
  }

  ngOnDestroy(): void {
    this._messageServiceList.unsubscribe();
  }
}
