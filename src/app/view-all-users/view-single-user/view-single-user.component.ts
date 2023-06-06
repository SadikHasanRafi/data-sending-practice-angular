import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-single-user',
  templateUrl: './view-single-user.component.html',
  styleUrls: ['./view-single-user.component.css']
})
export class ViewSingleUserComponent implements OnInit{

  id:unknown;

  constructor(private _location: Location, private route:ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      // Use the id parameter value in your component logic
    });
  }
  
  

  backClicked() {
    this._location.back();
  }

}
