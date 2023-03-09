import { Component } from '@angular/core';

//importacao do icone disponibilizado apos instalacao do pacote FontAwesomeModule
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// importacao service
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  //inicializa 
  faTimes = faTimes;

  //public para ter acesso ao servico no template(.html)
  constructor(public messagesService: MessagesService) {

  }
}
