import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() messageFromParents:any;
  @Output() messageFromChilds = new EventEmitter<string>()


  sendMessage():void{
    const data = "A request from children"
    this.messageFromChilds.emit(data)
  }
}
