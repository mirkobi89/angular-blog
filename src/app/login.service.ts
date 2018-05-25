import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  username : string;
  logged : boolean = false;

  constructor() {
  }

}

