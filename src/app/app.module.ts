import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import {HttpClientModule} from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component'
import {NgxImageCompressService} from 'ngx-image-compress';
@NgModule({
  declarations: [
    AppComponent,
  
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [NgxImageCompressService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log("It is main module")
  }
 }
