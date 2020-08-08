import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import {ChatService} from '../servicios/chat.service';




interface chat{ 
  description:string;
  name:string;
  id:string;
  img:string;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {
  public chatRooms:any[];
  constructor( public authservice:AuthService,public chatservice:ChatService ) {}


  Onlogout(){
  this.authservice.logout();

  }
  ngOnInit(){
    this.chatservice.getchatrooms().subscribe(chats =>{
      chats.map(chat=>{
        const data :chat=chat.payload.doc.data() as chat;
        console.log(data);

      })
      })
      }

}
