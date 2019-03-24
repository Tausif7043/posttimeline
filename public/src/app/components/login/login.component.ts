import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import * as _ from 'underscore';
import { Router } from '@angular/router';
import { WebStorage } from '../../services/web.storage';
import { appConfig } from '../../config/app.config';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    LoginForm: FormGroup;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router:Router,
        private storage: WebStorage,
        private toastr: ToastrService) { 
            let token = this.storage.get(appConfig.TOKEN) 
            if(!_.isEmpty(token)) { 
                this.router.navigate['post']
            }
        }

    ngOnInit() {
        this.LoginForm = this.formBuilder.group({ 
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        }); 
    }

    // convenience getter for easy access to form fields
    get f() { return this.LoginForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.LoginForm.invalid) {
            return;
        } 
        this.authService.login(this.LoginForm.value).subscribe((
            response) => {
            if(!_.isEmpty(response)) {
                this.router.navigate(['post']);
            }
        }, error => this.toastr.error('Invalid username or password'))
 
    }
}