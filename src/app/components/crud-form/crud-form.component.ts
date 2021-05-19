import { BlogService } from './../../services/blog.service';
import { Author } from './../../../models/author';
import { Post } from './../../../models/post';
import { QuillConfiguration } from './../../editor_settings/content-editor';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.scss']
})
export class CrudFormComponent implements OnInit {

  postForm: FormGroup;
  editorConfig = QuillConfiguration;

  post: Post = {
    title:"",
    body: "",
    timeRead: "",
    tags: [],
    authorId:0
  }

  constructor(private fb: FormBuilder,
              private router: Router,
              private service: BlogService) { }

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit() {
    this.post.title = this.postForm.get("title").value;
    this.post.body = this.postForm.get("body").value;
    this.post.authorId = 1;
    this.post.timeRead = "4 min";
    this.post.updatedAt = Date.now().toString();
    this.service.create(this.post).subscribe(response => {
      console.log("Post created: " + {...response})
      this.router.navigate(["/"])
    })
  }

  onCancel() {
    this.router.navigate(["/"])
  }

  private createForm(): void {
    this.postForm = this.fb.group({
      "title": "",
      "body": ""
    })
  }

}
