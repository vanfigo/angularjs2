import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Message } from '../interfaces/message.interface';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Message>;
  public chats: Message[] = [];
  public user: any = {};

  constructor(private afs: AngularFirestore,
              public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user) => {
      console.log('User state', user);
      if(user) {
        this.user.name = user.displayName;
        this.user.uid = user.uid;
      }
    })
  }

  loadMessages = () => {
      this.itemsCollection = this.afs.collection<Message>('chats', ref => ref.orderBy('date', 'desc')
                                                                              .limit(5));
      return this.itemsCollection.valueChanges()
        .pipe(map((messages: Message[]) => {
          this.chats = [];
          for(let message of messages) {
            this.chats.unshift(message);
          }
        }));
  }

  addMessage = (message: string) => {
    let newMessage: Message = {
      name: this.user.name,
      uid: this.user.uid,
      message: message,
      date: new Date().getTime()
    };
    return this.itemsCollection.add(newMessage);
  }

  login = (provider: string) => {
    if(provider === 'google')
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    else
      this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider());
  }

  logout = () => {
    this.user = {};
    this.afAuth.auth.signOut();
  }

}
