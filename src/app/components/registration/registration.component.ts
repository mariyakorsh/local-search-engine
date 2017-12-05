import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { User } from "../../models/user";
import { UserService } from "../../services/user.service";
import {Location} from "@angular/common";

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
  constructor(userService: UserService, router: Router, private _location: Location){
    this.userService = userService;
    this.router = router;
  }
  SignUp():void{
    let user = new User(this.username, this.password, this.email);
    this.userService.addUser(user);
    this.userService.setCurrentUser(user);
    this._location.back();
  }
  SignIn():void{
    let currentUser = this.userService.getUserByUserName(this.username);
    this.userService.setCurrentUser(currentUser);
    if(currentUser){
      this._location.back();
    }else {
      alert("Пользователь не найден");
    }
  }
}
