import { Injectable } from '@angular/core';
import { AngularFirestore}  from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private db:AngularFirestore) { }



getchatrooms(){

  return this.db.collection('chatsRooms').snapshotChanges();
  }
}
