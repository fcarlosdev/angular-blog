import { BlogService } from './../../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private service:BlogService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  private loadPosts() {
    this.service.getPosts().subscribe(data => {
      this.posts = data;
    })
  }

}
