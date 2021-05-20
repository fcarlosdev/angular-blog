import { BlogService } from './../../services/blog.service';
import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/models/tag';

@Component({
  selector: 'app-taglist',
  templateUrl: './taglist.component.html',
  styleUrls: ['./taglist.component.scss']
})
export class TaglistComponent implements OnInit {

  tags: Array<Tag> = [];

  constructor(private service: BlogService) { }

  ngOnInit(): void {
    this.service.getAllTags().subscribe(data => this.tags = data)
  }

}
