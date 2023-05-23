import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

@Input() room:string=""
export class RoomComponent {

}
