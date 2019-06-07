import Service from '.';
import { MessageModel } from 'src/model/messages.model';

import {Injectable} from '@angular/core'
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class MessageServices extends Service<any> {

    constructor(){
        super();
    }
    saveMessage(message: MessageModel): Observable<any>{
        return new Observable(observer => {
            this.post('message', message).subscribe(success => observer.next(success), error => observer.error(error))
        });
    }
    getAllMessages(): Observable<MessageModel[]>{
        return new Observable(observer => {
            this.get('message').subscribe(messages => observer.next(<MessageModel[]>messages), error => observer.error(error))
        })
    }
    /**
     * 
     */
    getAssuntos(): Observable<any[]>{
        return new Observable(observer => {
            this.get('assunto').subscribe(
                assuntos => observer.next(<any[]> assuntos)
            , error => observer.next(error))
        })
    }
    deleteMessage(id: number): Observable<any>{
        return new Observable(observer => {
            this.delete('message', id).subscribe(success => observer.next(success), error => observer.error(error));
        });
    }
}