import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginServiceService } from './service/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginFormGroup!:FormGroup 
  count:number=0;
  warning:boolean=false

  constructor(private fb:FormBuilder, private loginService:LoginServiceService, private router: Router){}

  ngOnInit() {
    this.loginFormGroup = this.fb.group({
      email:"",
      password:""
    });
  }



  handleSubmit(){
    this.count++
    if (this.count==3) {
      this.warning=true
    }

    if (!this.loginFormGroup.value.email.includes("sadik")) {
      this.warning=false
    }else{
      this.router.navigate(['more/private-route'])
    }

    console.log(this.loginFormGroup.value) 
    let token = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 64; i++) {
      let mr = Math.random()
      const randomIndex = Math.floor(mr * characters.length);

      if (randomIndex===0) {
        // console.log(randomIndex,mr,mr*characters.length,characters.length)
      }

      token = characters.charAt(randomIndex) + token;
    }
    console.log("token is -> ",token)

    localStorage.setItem('token',  JSON.stringify(this.loginFormGroup.value));
    // const mew:any = JSON.parse(localStorage.getItem('email'))
    this.loginService.sendFormData(this.loginFormGroup.value)
  }

}
