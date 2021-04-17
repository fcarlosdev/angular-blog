import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';
import { TagComponent } from './components/tag/tag.component';
import { AuthorFormComponent } from './components/author-form/author-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TagListComponent,
    PostListComponent,
    PostComponent,
    TagComponent,
    AuthorFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
