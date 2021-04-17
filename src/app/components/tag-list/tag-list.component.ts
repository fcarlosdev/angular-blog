import { TagsService } from './tags.service';
import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'app-taglist',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {

  tags:Tag[] = [];

  constructor(private tagsService: TagsService) { }

  ngOnInit(): void {
    this.tagsService.listAll().subscribe(response => {
      this.tags = response;
    }, error => {
      console.log("Error: " + error);
    })
  }

}
