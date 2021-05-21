import { User } from './../../../models/user';
import { BlogService } from './../../services/blog.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;

  user: User = {
    "name": "",
    "email": "",
    "password": "",
  }

  constructor(private fb: FormBuilder,
    private service: BlogService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      "name": "",
      "email": "",
      "password": "",
      "confPassword": ""
    })
  }

  onSubmit() {
    const { name, email, password, confPassword } = this.userForm.controls;
    if (password.value === confPassword.value) {
      this.user.name = name.value;
      this.user.email = email.value;
      this.user.password = password.value;

      this.service.signUp(this.user).subscribe(response => {
        alert("User registered " + response)
      })

    } else {
      alert("Passwords do not equals")
    }


  }

}
