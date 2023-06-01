import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-rx-js-country',
  templateUrl: './rx-js-country.component.html',
  styleUrls: ['./rx-js-country.component.css']
})


export class RxJsCountryComponent implements OnInit{

  posts:any[]=[];
  subscription: Subscription | undefined;
  err:unknown;

  constructor(private http:HttpClient){}

  ngOnInit(): void {

  }

  // startObserving() {
  //   const stringObservable = new Observable((observer:any) => {

  //     this.http.get("https://restcountries.com/v3.1/all").subscribe({
  //     next: (value: any) => observer.next(value),
  //     error: (error: any) => observer.error(error),
  //     complete: () => observer.complete()
  //       // (response) => observer.next(response),
  //       // (error) => observer.error(error),
  //       // () => observer.complete()
  //   });

  //   //   this.http.get<any>(this.url).subscribe(data => {
  //   //     this.posts = data
  //   //     console.log(this.posts)
  //   // })  
  //     observer.next('Hello');
  //     observer.next('Mew');
  //     observer.next('World');
      
  //     observer.complete();

  //   });

  //   const stringObserver = {
  //     next: (value: any) => console.log(value),
  //     error: (error: any) => console.error(error),
  //     complete: () => console.log('Observing completed'),
  //   };

  //   stringObservable.subscribe(stringObserver);

  // }

  startObserving() {

  const dataObservable = this.http.get("https://restcountries.com/v3.1/all")

  const dataObserver = {
    next: (value:any) =>this.posts=value,
    error: (error:any) =>this.err=error,
    complete: () => console.log('Observing completed'),
  };
  // console.log("dataobservable ",dataObservable)

  dataObservable.subscribe(dataObserver);
  
  }


  stopObserving() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }



  checkSubscriptionStatus(){
    if (this.subscription && !this.subscription.closed) {
      // Subscription is active and not unsubscribed
      console.log('Subscription is active');
    } else {
      // Subscription is either undefined or already unsubscribed
      console.log('Subscription is unsubscribed');
    }
  }


}


