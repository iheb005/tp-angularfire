import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
 
  email: string;
  objet: string;
  text: string;
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  message = {
    email:'',
    text:'',
    objet:''
  }

  constructor(db: AngularFireDatabase) {
    this.itemsRef = db.list('messages');
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }
  
  addMessage() {
    this.itemsRef.push({ text: this.text , email:this.email,objet:this.objet});
  }
  updateMessage(key: string, newText: string , newEmail : string, newObject:string) {
    this.itemsRef.update(key, { text: newText , email:newEmail,objet:newObject }).then(_ => console.log('success'))
    .catch(err => console.log(err, 'You dont have access!'));
  }
  deleteMessage(key: string) {    
    this.itemsRef.remove(key); 
  }
   getMessage(key: string, newText: string , newEmail : string, newObject:string)
  {
this.message.email= newText;
this.message.text = newEmail;
this.message.objet=newObject;
  }

  ngOnInit()
  {}
}
