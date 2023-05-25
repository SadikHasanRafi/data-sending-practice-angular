import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() tasks !:string
  @Input() showTask !:boolean

  childTask:string=""
  childTasks:string=this.tasks

  ngOnInit(): void {
    
  }

}
