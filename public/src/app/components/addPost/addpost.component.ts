import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service'
import * as _ from 'underscore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { WebStorage } from '../../services/web.storage';
import { appConfig } from '../../config/app.config';

@Component({
  selector: 'app-posts',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private service: PostService,
      private router: Router,
      private storage: WebStorage) { 
        let token = this.storage.get(appConfig.TOKEN)  
        if(_.isEmpty(token)) { 
            this.router.navigate([''])
        } 
      }

  ngOnInit() {
      this.postForm = this.formBuilder.group({
          title: ['', Validators.required],
          description: ['', Validators.required],
      });
  }
   // convenience getter for easy access to form fields
  get f() { return this.postForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.postForm.invalid) {
        return;
    }

    this.service.submitPost(this.postForm.value).subscribe((response) => { 
        if(!_.isEmpty(response)) {
          this.router.navigate(['post'])
        }
    })
  }

}
