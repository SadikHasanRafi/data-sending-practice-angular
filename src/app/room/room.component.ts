import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})


export class RoomComponent implements OnInit,AfterViewInit {

 @Input() room:any;

 @Output() ky = new EventEmitter<any>();
 

  @ViewChild(NavbarComponent) navbarCoponent !: NavbarComponent;

 selectRoom = (room:unknown):void =>{
  this.ky.emit(room)
}

// cat:string = 'mew';

 ngOnInit(): void {
  // console.log("rooms gula ",this.room?.id)
//  console.log(this.navbarCoponent)
 }

 ngAfterViewInit(): void {
  // console.log(this.navbarCoponent)

 }

}
