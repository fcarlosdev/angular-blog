import { BlogService } from './../../services/blog.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
  }

  isUserLogged():boolean {
    return this.blogService.isUserLogged();
  }
  
  logout(){
    this.blogService.userLogout();
  }

}
