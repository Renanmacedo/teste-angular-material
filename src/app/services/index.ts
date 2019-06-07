import {OnInit, Optional} from '@angular/core'
import { Observable, observable } from 'rxjs';
import MESSAGES from '../../assets/mock/messages';
import MENU from '../../assets/mock/items.menu';
import ASSUNTOS from '../../assets/mock/assunto.mock';
type OptionLoad = "message" | "menu" | "assunto";

/**
 * 
 */
export default class Service<T> implements  OnInit {
   
    private loadData: any;

    constructor(){}
    
    ngOnInit(): void { 

    }


    get(path?: OptionLoad): Observable<T | T[]> {
        return new Observable<T | T[]>( observer => {
            this.loadData = path == 'menu' ? MENU : path == 'message' ?  MESSAGES : ASSUNTOS;
            observer.next(<T> this.loadData);
        });
    }
    post(path: OptionLoad,body?: T): Observable<any>{
        return new Observable<any>(observer => {
            if(path == "message")
                MESSAGES.push(body);
            if(path == "assunto")
                MESSAGES.push(body);
            observer.next({ok: true, details: 'operação realizada'})
        , error => observer.error(error)
        })
    }
    delete(path: OptionLoad, id: any): Observable<any>{
        return new Observable(observer => {
            let hasDelete = false;
            if(path == 'message'){
                let index = MESSAGES.findIndex(m => m.id = id);
                console.log(index);
                if(index !== -1){
                    MESSAGES.splice(index, 1);
                    console.log(MESSAGES);
                    hasDelete = true;
                }
            }
            observer.next({ok: hasDelete});
        })
    }
}