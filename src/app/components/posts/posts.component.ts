import { BlogService } from './../../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private service:BlogService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  signup() {
    this.router.navigateByUrl("/signup")
  }

  private loadPosts() {
    this.service.getPosts().subscribe(data => {
      this.posts = data;
    })
  }

}
