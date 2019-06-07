import { Observable } from 'rxjs';
import {Injectable} from '@angular/core'
import Service from '.';
import { MenuModel } from 'src/model/menu.model';
 
@Injectable({
    providedIn: 'root'
})
export class MenuServices extends Service<MenuModel> {

    private _itemsMenus: any[];

    constructor(){
        super();
        this._initialize();
    }

    private _initialize(){
        this._itemsMenus = [];   
    }
    /**
     * 
     * @param path 
     */
    loadMenus():Observable<MenuModel[]> {
        return new Observable<MenuModel[]>(observer => {
            this.get('menu').subscribe(menus => observer.next(<MenuModel[]> menus),error=> observer.error(error))
        }) 
    }
}
