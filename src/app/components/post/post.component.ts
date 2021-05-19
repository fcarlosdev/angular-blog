import { Post } from './../../../models/post';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor(private sanatizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  postDescription(): any {
    const { body } = this.post;
    return this.sanatizer.bypassSecurityTrustHtml(this.extracPortionOf(body));
  }

  private extracPortionOf(body):string {
    return (body.length < 300) ? body : body.substring(0, 300).concat("...")
  }

}
