import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { User } from "../../models/user";
import { UserService } from "../../services/user.service";

@Component({
  selector: "reg",
  templateUrl: "registration.component.html",
  styleUrls: ["registration.component.css"]
})
export class RegistrationComponent {
  username: string;
  password: string;
  repeatPassword: string;
  email: string;
  userService: UserService;
  router: Router;
  constructor(userService: UserService, router: Router){
    this.userService = userService;
    this.router = router;
  }
  SignUp():void{
    let user = new User(this.username, this.password, this.email);
    this.userService.addUser(user);
    this.userService.setCurrentUser(user);
    window.location.assign( "");
  }
  SignIn():void{
    let currentUser = this.userService.getUserByUserName(this.username);
    this.userService.setCurrentUser(currentUser);
    if(currentUser){
      window.location.assign( "");
    }else {
      alert("User doesn't exist in the system");
    }
  }
}
