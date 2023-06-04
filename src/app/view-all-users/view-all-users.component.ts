import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import Swal from 'sweetalert2';
// import {map} from 'rxjs/operators'

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent implements OnInit {



  users$: Observable<any> | undefined;
  userIds: any;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    // this.getData();
    
    //  this.http.get("https://elegant-bd-jobs.onrender.com/users").pipe(
    //   map((data: any) => ({id: data._id}))).subscribe(console.log)
    //   this.users$.pipe( 
    //     map((data:any[]) => {
    //       return data.map((id:any) => id._id)
    //     })
    //   ).subscribe(console.log)
    //   // this.userIds.subscribe((id:any) => console.log(id))
    this.getData()

  }

  handleDeleteUser(id:unknown){
    console.log(id)
    let res = this.http.delete<any>(`https://elegant-bd-jobs.onrender.com/delete-a-user?_id=${id}`)
    res.subscribe(
      (next:any)=>{
        // console.log(next.status)
        if (next===true) {
          Swal.fire({
            title: '',
            text:'User deleted successfully!',
            icon: 'success'
        })
          
          //deleted 
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
          //not delete or data not found try again later
        }

      }
    )
    console.log(res)


    this.getData()
  }

  handleViewUser(id:unknown){
    console.log(id)
    // `https://elegant-bd-jobs.onrender.com/get-single-user?email=${email}`
  }

  getData(){
    // this.users$ = this.http.get("https://elegant-bd-jobs.onrender.com/users");


    this.users$ = this.http.get("https://elegant-bd-jobs.onrender.com/users");
    this.users$.pipe(
      map((data: any[]) => data.map((user: any) => user))
    ).subscribe((ids: any[]) => {
      this.userIds = ids;
      // console.log(ids);
    });
  }


}