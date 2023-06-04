import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostDatabaseService {

  constructor(private http:HttpClient) { }
  saveData(data:unknown){
    return this.http.post("https://elegant-bd-jobs.onrender.com/insertuser",data, {
      headers : {
        "Content-Type" : "application/json"
      }
    })
  }
}
//     