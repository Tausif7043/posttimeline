import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PostsComponent } from './components/posts/posts.component';
import { AddPostComponent } from './components/addPost/addpost.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from "./services/auth.service";
import { PostService } from "./services/post.service";
import { HttpClient } from "./services/http.client";
import { WebStorage } from "./services/web.storage";
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';
import { HeadernavComponent } from './components/headernav/headernav.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostsComponent,
    RegisterComponent,
    AddPostComponent,
    HeadernavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [AuthService, PostService, HttpClient, WebStorage, LocalStorageService, SessionStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
