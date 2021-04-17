import { BlogService } from './../../services/blog.service';
import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post';
import { PostService } from './post.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {


  posts: Post[] = [];

  constructor(
    private postService: PostService,
    private blogService: BlogService) { }

  ngOnInit(): void {
    this.listPosts();
  }

  isUserLogged():boolean {
    return this.blogService.isUserLogged();
  }

  private listPosts(): void {
    this.postService.listAll().subscribe(response => {
      this.posts = response;
    }, error => {
      console.log("Error: " + error);
    })
  }

}
