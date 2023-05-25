import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements AfterViewInit,OnInit {

  @ViewChild(ChildComponent,{static:true}) child!: ChildComponent;
  newTasks:string = "";
  showTask:boolean=false

  childIsDoingSomething:boolean=false

  ngAfterViewInit() {
    // child is 
    console.log("ngAfterViewInit parent with child = ", this.child.childTask);
  }

  handleAddButton():void {
    console.log(this.newTasks)
    this.showTask=true
  }

  handleFocus():void{
    this.showTask=false
  }

  ngOnInit(){
    if (this.child.childTask != "") {
      this.childIsDoingSomething = true
    }
  }


}
