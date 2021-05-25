import { BlogService } from 'src/app/services/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(private service: BlogService) { }

  ngOnInit(): void {
  }

  userLogged():boolean {
    return this.service.isLogged();
  }

}
