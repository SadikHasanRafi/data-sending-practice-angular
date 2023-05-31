import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RoomComponent } from '../room/room.component';
import { RoomListService } from './room-list.service';

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

export class RoomsComponent implements OnInit,AfterViewInit {

  @ViewChild(RoomComponent,{static:true}) roomComponent !: RoomComponent;

  roomList:Room[] = [];
  
  selectedRoomInfo:Room | undefined;

  //child theke asa data ekhane ase
  selectedRoomparent = (room:any):void =>{
      this.selectedRoomInfo = room
       console.log(this.selectedRoomInfo)
  }
  isDisabled:boolean=false

  handleClearSelection = ():void => {
    console.log("button clicked")
      this.selectedRoomInfo = undefined
  }

  constructor(private roomListService : RoomListService ){

  }
  
  ngOnInit() {
    this.roomList = this.roomListService.roomList;
    this.roomListService.getHotelRoaomInfos();
  }
  
  //   ngOnInit(): void {
  //   console.log("from parents -> ",this.selectedRoomInfo)
  //   if (this.selectedRoomInfo === undefined) {
  //     this.isDisabled = true
  //   }
  // }

  ngAfterViewInit(): void {
    // console.log(this.roomComponent.cat)
  }
}

