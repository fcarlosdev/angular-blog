import { Router } from '@angular/router';
import { NotificationService } from './../../services/notification.service';
import { User } from './../../../models/user';
import { BlogService } from './../../services/blog.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

const LOGIN_FORM = "login";
const SIGNUP_FORM = "signup";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  providers: [NotificationService]
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  formType: string = LOGIN_FORM;
  btnLabel: string = "Log In"

  user: User = {
    "name": "",
    "email": "",
    "password": "",
  }

  constructor(private fb: FormBuilder,
    private service: BlogService,
    private router: Router,
    private notifyService: NotificationService) { }

  ngOnInit(): void {
    const url = this.router.url.replace("/", "");
    if (url == SIGNUP_FORM) {
      this.createSignupForm();
      this.formType = SIGNUP_FORM;
      this.btnLabel = "Sign Up";
    } else {
      this.createLoginForm();
    }
  }

  getField(label: string): AbstractControl {
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
    if (this.formType == SIGNUP_FORM) {
      const { name, email, password, confPassword } = this.userForm.controls;
      if (password.value === confPassword.value) {
        this.user.name = name.value;
        this.user.email = email.value;
        this.user.password = password.value;

        this.service.signUp(this.user).subscribe(() => {
          this.notifyService.showSuccess("User registered!!", "Sign Up")
          this.clearForm();
          this.selectForm(LOGIN_FORM);
        })

      } else {
        this.notifyService.showErrorMessage("Passwords do not equals", "Sign Up")
      }
    } else {
      const {email, password} = this.userForm.controls;
      this.service.login(email.value,password.value)
    }
  }

  selectForm(frmType: string) {
    this.formType = frmType;
  }

  loginFormActive(): boolean {
    return (this.formType == LOGIN_FORM)
  }

  signupFormActive(): boolean {
    return (this.formType == SIGNUP_FORM)
  }

  private clearForm() {
    this.userForm.reset();
  }

  private createSignupForm() {
    this.userForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      confPassword: ["", Validators.required]
    })
  }

  private createLoginForm() {
    this.userForm = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", Validators.required],
    })
  }

}
