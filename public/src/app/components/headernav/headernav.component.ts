import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import * as _ from 'underscore';
import { Router } from '@angular/router';
import { WebStorage } from '../../services/web.storage';
import { appConfig } from '../../config/app.config';

@Component({
  selector: 'app-headernav',
  templateUrl: './headernav.component.html',
  styleUrls: ['./headernav.component.css']
})
export class HeadernavComponent implements OnInit {
  isLogin:boolean = false;
  constructor(
    private router:Router,
    private authService: AuthService,
    private storage: WebStorage,
  ) { }

  ngOnInit() {
    let token = this.storage.get(appConfig.TOKEN)
    if(!_.isEmpty(token)) { 
      this.isLogin = true
    }
  }

  logout () { 
    if(this.authService.logout()) { 
      this.isLogin = false; 
      this.router.navigate(['login'])
    }
  }
}
