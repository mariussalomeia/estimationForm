import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {  MatSnackBarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {EstimationFormComponent} from './estimationform/estimationform.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatSnackBarModule,BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent,EstimationFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

 }
