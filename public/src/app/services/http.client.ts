import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { WebStorage } from './web.storage'; 
import { appConfig } from '../config/app.config';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpClient {

  constructor(
    private http: Http,
    private storage: WebStorage

  ) { }


  // Content-Type': 'multipart/form-data'
  createAuthorizationHeader(headers: Headers) {     
    headers.append('Authorization', 'bearer ' + this.storage.get(appConfig.TOKEN));
    
  }

  loginSignUp(url: string, data: any) {
    let headers = new Headers(); 
    return this.http.post(appConfig.apiUrl + url, data, {
      headers: headers
    }) 
  }
 
  post(url: string, data: any) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(appConfig.apiUrl + url, data, {
      headers: headers
    });
  }

  get(url: string, data: any) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    let options = {
      headers: headers
    };
    let params: URLSearchParams = new URLSearchParams(); 
    if(data !=null) {
      Object.keys(data).map(function (key, index) {
        if (data[key] != '') {
          params.set(key, data[key]);
        }
      }); 
    }
    return this.http.get(appConfig.apiUrl + url, options);
  }


  put(url: string, data: any) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.put(appConfig.apiUrl + url, data, new RequestOptions({
      headers: headers
    }));
  } 
   
  delete(url: string, data: any) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.delete(appConfig.apiUrl + url, new RequestOptions({
      headers: headers,
      body: data
    }));
  }
 
}