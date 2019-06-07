import { 
  Component
  , OnInit
  , Input
  , Output
  , EventEmitter
  ,ChangeDetectionStrategy
} from '@angular/core';
import { MessageModel } from 'src/model/messages.model';

@Component({
  selector: 'app-message-list'
  ,templateUrl: './message-list.component.html'
  ,styleUrls: ['./message-list.component.scss']
  ,changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageListComponent implements OnInit {
  
  _messages: Array<any>;
  
  // emmiter events the component dead
  @Output() public removeMessage: EventEmitter<MessageModel> = new EventEmitter();

  

  _showMessage: boolean = false;
  messagesIsEmpty: boolean = false;
  message: MessageModel;

  constructor() { }

  ngOnInit() {

    if(this._messages.length == 0){
      this.messagesIsEmpty = true;
    }
  }
  @Input()
  set messages(messages: any) {
    this._messages = messages;
  }
  showMessage(id: number){
    let index =  this._messages.findIndex(message => message.id == id);
    if(index !== -1)
      this.message = this._messages[index];
    
    this._showMessage = !this._showMessage;
  }

  hideMessage(){
    this._showMessage = false;
  }
  _removeMessage(){
    this._showMessage = false;
    this.removeMessage.emit(this.message);
  }
}
