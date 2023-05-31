import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'ngByOwn-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {

  @ViewChild('container') container !: ViewContainerRef;

  
}
