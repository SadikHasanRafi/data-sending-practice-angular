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
  styleUrls: ['./rooms.component.css']
})


export class RoomsComponent implements OnInit {

  roomList:Room[] = [];

  
  normalData:string="sjdbsm"

  ngOnInit(): void {

    this.roomList = [
      { id: 1, name: "Conference Room A", capacity: 10, location: "Floor 1" },
      { id: 2, name: "Conference Room B", capacity: 8, location: "Floor 2" },
      { id: 3, name: "Meeting Room X", capacity: 6, location: "Floor 3" },
      // Add more rooms as needed
    ];

    

  }
  
  
}

