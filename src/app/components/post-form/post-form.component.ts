import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { QuillConfiguration } from 'src/app/editor_settings/content-editor';
import { BlogService } from 'src/app/services/blog.service';
import { Post } from 'src/models/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  postForm: FormGroup;
  editorConfig = QuillConfiguration;

  post: Post = {
    title:"",
    body: "",
    timeRead: "",
    tags: [],
    userId:0
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
    this.post.userId = 1;
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
