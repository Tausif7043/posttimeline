import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import * as _ from 'underscore';
import { Router } from '@angular/router';
import { WebStorage } from '../../services/web.storage';
import { appConfig } from '../../config/app.config';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  events = [];
  constructor(
    private service: PostService,
    private router: Router,
    private storage: WebStorage
  ) { 
    let token = this.storage.get(appConfig.TOKEN)  
    if(_.isEmpty(token)) { 
        this.router.navigate([''])
    } else {
        this.service.getAllPost().subscribe((response) => {
          if(!_.isEmpty(response)) {
            this.events = response;
          }
      })
    }
  }

  ngOnInit() {
    
  }

  addPost () {
    this.router.navigate(['addpost']);
  }
}
