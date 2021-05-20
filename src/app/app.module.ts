import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { AuthorComponent } from './components/author/author.component';
import { CrudFormComponent } from './components/crud-form/crud-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { TagComponent } from './components/tag/tag.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TaglistComponent } from './components/taglist/taglist.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    AuthorComponent,
    CrudFormComponent,
    TagComponent,
    NavbarComponent,
    TaglistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
