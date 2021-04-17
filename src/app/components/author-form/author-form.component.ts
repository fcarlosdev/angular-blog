import { BlogService } from './../../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.scss']
})
export class AuthorFormComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: BlogService,
    private route: Router) { }

  ngOnInit(): void {
    this.userForm = this.createFormGroup();
  }

  onSubmit() {
    this.service.saveAuthor(this.userForm.value)
      .subscribe(data => {
        if (data) {
          this.service.registerUser();
          this.route.navigateByUrl("/");
        }
      }, error => console.log(error))
  }

  createFormGroup() {
    return this.formBuilder.group({
      name: [null],
      email: [null],
      password: [null],
      passwConf: [null]
    })
  }

}
