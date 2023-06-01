import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostDatabaseService {

  constructor(private http:HttpClient) { }
  saveData(data:unknown){
    return this.http.post("http://localhost:5000/insertuser",data, {
      headers : {
        "Content-Type" : "application/json"
      }
    })
  }
}
