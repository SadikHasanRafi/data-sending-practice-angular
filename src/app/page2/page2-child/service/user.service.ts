import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor() { }

  userList = [
    {
      name: "John Doe",
      dateOfBirth: "1990-05-15",
      role: "Software Engineer",
      salary: 5000,
    },
    {
      name: "Jane Smith",
      dateOfBirth: "1985-10-25",
      role: "Project Manager",
      salary: 8000,
    },
    {
      name: "Alice Johnson",
      dateOfBirth: "1993-03-08",
      role: "UX Designer",
      salary: 6000,
    },
    
  ];
  getUsers() {
    return this.userList
  }
}
