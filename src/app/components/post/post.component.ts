import { Comment } from './../../../models/comment';
import { BlogService } from './../../services/blog.service';
import { Post } from './../../../models/post';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Tag } from 'src/models/tag';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  tags = [];

  constructor(private sanatizer: DomSanitizer,
    private service: BlogService) { }

  ngOnInit(): void {
    this.loadTags();
  }


  onReaction() {
    let userId = Math.floor((Math.random() * 10) + 1);
    this.post.likes.push(userId)
    this.service.addLike(this.post).subscribe(response => console.log("Comment added"))
  }

  countReactions():number {
    return this.post.likes.length;
  }

  loadTags(): void {
    this.post.tags.forEach(tag => {
      this.service.getTag(tag).subscribe(data => {
        this.tags.push(data);
      })
    })
  }

  postDescription(): any {
    const { body } = this.post;
    return this.sanatizer.bypassSecurityTrustHtml(this.extracPortionOf(body));
  }

  private extracPortionOf(body): string {
    return (body.length < 300) ? body : body.substring(0, 300).concat("...")
  }

}
