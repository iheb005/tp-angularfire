import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase} from "angularfire2/database";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  description: Observable<any>;

  constructor(private db: AngularFireDatabase)
  {
  	this.description=db.object('description').valueChanges();
  }

  ngOnInit()
  {}
}
