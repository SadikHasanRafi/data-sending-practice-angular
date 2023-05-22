import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  parent_sMessage="its an message from parents to children"
  message: string = '';

  receiveMessage(message: string): void {
    this.message = message;
  }
  

}
