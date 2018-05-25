import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice: LoginService,private location: Location) { }

  ngOnInit() {
  }
  
  message: string;
  username: string = 'admin';
  password: string = 'admin';



  verify_userpass(username,password){
    if(username===this.username && password===this.password){
      this.loginservice.username = username;
      this.location.back();
      this.loginservice.logged = true;
      console.log(this.loginservice.logged);
    }
    else{
      this.message = 'Invalid credentials';
    }
  }

}
