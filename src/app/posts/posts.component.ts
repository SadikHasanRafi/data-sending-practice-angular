import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:any;

  url:string = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.http.get<any>(this.url).subscribe(data => {
        this.posts = data
        console.log(this.posts)
    })   
         
}



}
