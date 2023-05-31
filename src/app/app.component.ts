import { Component, AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'router-practicce';

  @ViewChild('user',{read:ViewContainerRef}) vcr !: ViewContainerRef;

  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(ChildComponent)
    componentRef.instance.childTask = '123asda'
  }
}
