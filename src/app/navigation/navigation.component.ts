import { Component, OnInit } from '@angular/core';
import {MenuServices} from '../services/menu.services'
import { MenuModel } from 'src/model/menu.model';
@Component({
  selector: 'app-navigation'
  ,templateUrl: './navigation.component.html'
  ,styleUrls: ['./navigation.component.scss']
  ,providers:[MenuServices]
})
export class NavigationComponent implements OnInit {
  /* @variable  */

  private _errorShowMenu: boolean = false;

  private menus: Array<MenuModel>;
  constructor(
    private menuServices: MenuServices
  ) { }

  ngOnInit() {
    this.initialize();
  }
  private initialize(){
    this.menuServices.loadMenus().subscribe(
      menus => this.menus = menus,
      error => this._errorShowMenu = true
    )
  }

}
