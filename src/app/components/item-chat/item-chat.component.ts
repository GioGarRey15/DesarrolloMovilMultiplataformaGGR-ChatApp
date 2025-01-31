import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-chat',
  templateUrl: './item-chat.component.html',
  styleUrls: ['./item-chat.component.scss'],
  standalone:false
})
export class ItemChatComponent  implements OnInit {

  @Input() username: String=""; 
  @Input() message: String=""; 
  @Input() date: String=""; 
  @Input() avatarUrl: String=""; 

  constructor() { }

  ngOnInit() {}

}
