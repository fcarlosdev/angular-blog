import { browser } from 'protractor';
import { UserFormComponent } from './components/user-form/user-form.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { QuillModule } from 'ngx-quill';
import { TagComponent } from './components/tag/tag.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TaglistComponent } from './components/taglist/taglist.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    TagComponent,
    NavbarComponent,
    TaglistComponent,
    PostFormComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
