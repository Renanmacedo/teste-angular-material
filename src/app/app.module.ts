import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Material  module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
// Flex layout 
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationComponent } from './navigation/navigation.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule
    ,AppRoutingModule
    ,BrowserAnimationsModule
    ,MatSidenavModule
    ,MatIconModule
    ,MatButtonModule
    ,MatToolbarModule
    ,MatListModule
    ,FlexLayoutModule
    ,CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
