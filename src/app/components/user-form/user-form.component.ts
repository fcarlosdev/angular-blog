import { User } from './../../../models/user';
import { BlogService } from './../../services/blog.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
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
    this.createUserForm();
  }

  getField(label): AbstractControl {
    return this.userForm.get(label);
  }

  fieldInvalid(field: string): boolean {
    const fName = this.getField(field);
    return (fName.dirty || fName.touched) && fName.invalid;
  }

  requiredField(field: string): boolean {
    return this.fieldInvalid(field) && this.getField(field).errors.required;
  }

  emailInvalid(mailField: string): boolean {
    return this.fieldInvalid(mailField) && this.getField(mailField).errors.email;
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

  onCancel() {
    this.userForm.reset();
  }


  private createUserForm() {

    this.userForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      confPassword: ["", Validators.required]
    })
  }

}
