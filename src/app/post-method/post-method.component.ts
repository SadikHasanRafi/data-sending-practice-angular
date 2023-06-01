import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PostDatabaseService } from './Service/post-database.service';

@Component({
  selector: 'app-post-method',
  templateUrl: './post-method.component.html',
  styleUrls: ['./post-method.component.css']
})
export class PostMethodComponent {

  result:unknown;
  error:unknown;
  
  constructor( private sendDataTodb:PostDatabaseService){}

  getUserData(data:unknown){
    this.sendDataTodb.saveData(data).subscribe({
      next: (result:unknown) => {
        console.log(result)
        this.result = result
      },
      error: (error:undefined) => this.error = error,
      complete: () => console.log("complete")
    })

  }

}
