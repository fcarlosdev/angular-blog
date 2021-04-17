import { Tag } from 'src/app/models/tag';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {

  @Input() tagItem:Tag;
  @Input() applyPadding:boolean=false;

  constructor() { }

}
