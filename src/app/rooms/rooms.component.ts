import { Component, OnInit } from '@angular/core';

interface Room {
  id: number;
  name: string;
  capacity: number;
  location: string;
}

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  // template: `
  // <p>rooms works!</p>
  // <app-room [room]="roomList" ></app-room>
  // `,
  styleUrls: ['./rooms.component.css']
})

export class RoomsComponent implements OnInit {

  roomList:Room[] = [
    { id: 1, name: "Conference Room A", capacity: 10, location: "Floor 1" },
    { id: 2, name: "Conference Room B", capacity: 8, location: "Floor 2" },
    { id: 3, name: "Meeting Room X", capacity: 6, location: "Floor 3" },
    { id: 4, name: "Board Room 1", capacity: 12, location: "Floor 4" },
    { id: 5, name: "Training Room A", capacity: 20, location: "Floor 1" },
    { id: 6, name: "Breakout Room 1", capacity: 4, location: "Floor 3" },
    { id: 7, name: "Conference Room C", capacity: 6, location: "Floor 2" },
  ];
  
  selectedRoomInfo:unknown;

  selectedRoomparent = (room:any):void =>{
      console.log(room)
      this.selectedRoomInfo = room
  }
  
    ngOnInit(): void {
    console.log("from parents -> ",this.selectedRoomInfo)
  }
}

