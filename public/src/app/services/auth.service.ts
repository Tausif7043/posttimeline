import { Injectable, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { HttpClient } from './http.client';
import { WebStorage } from './web.storage';
import { appConfig } from '../config/app.config';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient, private storage: WebStorage) { }

    login(data: any): Observable<any> {

        this.storage.clearAll();
        return this.http.loginSignUp('auth/signin', data).map((result: any) => {
           result = result.json(); 
           this.storage.localStore(appConfig.TOKEN, result.token);
           this.storage.localStore(appConfig.USERID, result.profile.uid);
           return result; 
       });

    }

    register(data: any): Observable<any> {
        this.storage.clearAll();
        return this.http.loginSignUp('auth/signup', data).map((result: any) => {
           result = result.json();
        }) 
    }
 
    logout ():boolean {
        this.storage.clearAll();
        return true;
    }
 
}
