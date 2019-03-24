import { Injectable, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { HttpClient } from './http.client';
import { WebStorage } from './web.storage';
import { appConfig } from '../config/app.config';

@Injectable()
export class PostService {
    constructor(private http: HttpClient, private storage: WebStorage) { }

    getAllPost(): Observable<any> { 
        return this.http.get('post/get', null).map((result: any) => {
           result = result.json();  
           return result; 
       });

    }

    submitPost(data: any): Observable<any> { 
        data.user = this.storage.get(appConfig.USERID)
        return this.http.post('post/post', data).map((result: any) => {
           result = result.json();
           return result;
        }) 
    }
 
 
}
