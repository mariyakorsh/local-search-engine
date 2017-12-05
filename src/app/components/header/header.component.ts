import {Component, OnInit} from "@angular/core";
import { Router} from "@angular/router";

import { UserService } from "../../services/user.service";
import { PlacesService } from "../../services/places.service";
import {User} from "../../models/user";


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  value: string;
  router: Router;
  userService: UserService;
  currentUser: User;

  constructor(router: Router, userService: UserService, public placesService: PlacesService){
     this.router = router;
     this.userService = userService;

  }
  ngOnInit(){
  this.userService.getCurrentUser().subscribe(u => {
    debugger
    this.currentUser = u
  }, error2 => {
    debugger
    console.log(error2)
  });
  }
   Registration(): void {
    this.router.navigateByUrl('/registration');
  }
  LogOut(): void {
     this.userService.logOut();
     this.currentUser = null;
  }
  Search(city: string): void{
    if(city.length % 3 == 0) {
      debugger
      var a;
      this.placesService.getCities(city).subscribe(value => {
        debugger
        a = value;
      });
    }
  }
}
