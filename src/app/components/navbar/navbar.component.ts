import { Subject } from 'rxjs';
import { User } from './../../../models/user';
import { BlogService } from 'src/app/services/blog.service';
import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currUser: any;

  constructor(private service: BlogService) { }

  ngOnInit(): void {
    this.loadUser();
  }

  userLogged(): boolean {
    return this.service.isLogged();
  }

  private loadUser() {
    if (!this.service.isLogged()) {
      this.service.getUser$().subscribe(u => this.currUser = u);
    } else {
      this.currUser = this.service.getLoggedUser();
    }
  }

}
