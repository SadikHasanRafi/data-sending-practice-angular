import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngByOwn-page2-child',
  templateUrl: './page2-child.component.html',
  styleUrls: ['./page2-child.component.css']
})

export class Page2ChildComponent implements OnInit {
  Constructor(private userList : [] ){

    ngOnInit() {
      
    }
  }
