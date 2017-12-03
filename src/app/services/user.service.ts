
import {Injectable} from "@angular/core";
import {User} from "../models/user";
import {Subject} from "rxjs/Subject";
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService{

  addUser(user: User): void{
   let key: string = user.username;
   let data: string = JSON.stringify(user);
   localStorage.setItem(key, data);
  }
  getUserByUserName(name: string): User{
    let user = <User> JSON.parse(localStorage.getItem(name));
   return user;
  }
  setCurrentUser(user: User){
    let data: string = JSON.stringify(user);
    localStorage.setItem("currentUser", data);
  }
  getCurrentUser(): User {
    return <User> JSON.parse(localStorage.getItem('currentUser'));
  }
  logOut(): void{
    localStorage.removeItem('currentUser');
  }
}
