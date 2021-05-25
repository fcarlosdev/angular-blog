import { Router } from '@angular/router';
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

  constructor(private service:BlogService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  isLogged():boolean {
    return this.service.isLogged();
  }

  logout():void {
    this.service.logout();
    this.router.navigateByUrl("/")
  }


  private loadPosts() {
    this.service.getPosts().subscribe(data => {
      this.posts = data;
    })
  }

}
