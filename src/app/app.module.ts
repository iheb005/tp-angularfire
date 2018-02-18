import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";

const config = {
    apiKey: "AIzaSyBWsj7a-6seEKnaZME_38fVnNnceFfLli8",
    authDomain: "tp-angularfire-afcf0.firebaseapp.com",
    databaseURL: "https://tp-angularfire-afcf0.firebaseio.com",
    projectId: "tp-angularfire-afcf0",
    storageBucket: "tp-angularfire-afcf0.appspot.com",
    messagingSenderId: "130638706521"
  };
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
