import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  constructor(private router:Router,private route:ActivatedRoute){}
  countryName:any=""
  ngOnInit(): void {
    this.countryName = this.route.snapshot.paramMap.get("name")
  }


}
