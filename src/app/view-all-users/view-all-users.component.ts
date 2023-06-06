import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import Swal from 'sweetalert2';
// import {map} from 'rxjs/operators'

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent implements OnInit {



  users$ !: Observable<any> ;
  userIds: any;


  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit(): void {

    this.getData();

     this.http.get("https://elegant-bd-jobs.onrender.com/users").pipe(
      map((data: any) => ({id: data._id}))).subscribe(console.log)
      this.users$.pipe(
        map((data:any[]) => {
          return data.map((id:any) => id._id)
        })
      ).subscribe(console.log)
      // this.userIds.subscribe((id:any) => console.log(id))
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

  handleOnTextChange($event: any, data: any, type: string) {
    console.log('EVENT: ', $event.target.value, data);
    const foundIndex = this.userIds.findIndex((user: any) => user._id === data._id);
    if (foundIndex !== -1) {
      if (type === 'email') {
        this.userIds[foundIndex] = {...this.userIds[foundIndex], email: $event.target.value};
      } else if (type === 'name') {
        this.userIds[foundIndex] = {...this.userIds[foundIndex], name: $event.target.value};
      }
    }
  }

    handleUpdateUser(id:string, uid: string, data: any) {
    console.log(id, data);
    // return;
    let res = this.http.put<any>(`https://elegant-bd-jobs.onrender.com/update-single-user/${uid}?id=${id}`, {
      email: data.email,
      name: data.name,
    });
    res.subscribe(
      (next: any) => {
        console.log(next.status);
        if (next === true) {
          Swal.fire({
            title: '',
            text:'User updated successfully!',
            icon: 'success'
          });
          this.getData();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          });
        }

      }
    )
  }



  handleViewUser(id:unknown){
    console.log(id)
    // this.router.navigate(['../view-single-user',id]);

    this.router.navigate(['/more/view-all-users/view-single-user', id]);

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
