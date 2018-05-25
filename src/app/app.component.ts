import { Component} from '@angular/core';
import { LoginService } from './login.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANGULAR BLOG!';

  constructor(private loginservice: LoginService){ }

  logout(){
    this.loginservice.logged = false;
    this.loginservice.username ='';
    
  }

}

