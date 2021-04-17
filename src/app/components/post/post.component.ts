import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { getDayAndMonth } from '../../shared/helpers';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postItem:Post;
  dayMonth: string;

  constructor() { }

  ngOnInit(): void {
    this.dayMonth = getDayAndMonth(this.postItem.posted_at);
  }

  displayTags() {
    return "hor";
  }

}
