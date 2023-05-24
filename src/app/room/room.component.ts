import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})


export class RoomComponent implements OnInit {

 @Input() room:any;

 @Output() ky = new EventEmitter<any>();
 
 selectRoom = (room:unknown):void =>{
  this.ky.emit(room)
}

 ngOnInit(): void {
  console.log("rooms gula ",this.room?.id)
 
 }

}
