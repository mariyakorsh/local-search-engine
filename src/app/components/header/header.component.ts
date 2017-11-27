import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

import { UserService } from "../../services/user.service";
import {User} from "../../models/user";


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  router: Router;
  userService: UserService;
  currentUser: User;
  constructor(router: Router, userService: UserService){
     this.router = router;
     this.userService = userService;
   this.currentUser = this.userService.getUserByUserName("currentUser");
  }
   Registration(): void {
    this.router.navigateByUrl('/registration');
  }
  LogOut(): void {
     this.userService.logOut();
     this.currentUser = null;
  }
}
