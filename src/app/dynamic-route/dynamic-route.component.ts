import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dynamic-route',
  templateUrl: './dynamic-route.component.html',
  styleUrls: ['./dynamic-route.component.css']
})
export class DynamicRouteComponent implements OnInit{

  countryData:any;

  constructor(private http:HttpClient,private router: Router){}


  // https://restcountries.com/v3.1/all

  ngOnInit(): void {
    
    this.getData().subscribe(res => {
      this.countryData = res
      console.log(this.countryData,this.countryData.length)
    })
  }

  countryDetails(country:any){
    this.router.navigate(['more/dynamic-route', country.name.common]);

    console.log(country)
  }

  getData(){
    return this.http.get('https://restcountries.com/v3.1/all')
  }

}
