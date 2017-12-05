
import {Injectable} from "@angular/core";
import {User} from "../models/user";
import {Subject} from "rxjs/Subject";
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class UserService{
  subject: BehaviorSubject<User> = new BehaviorSubject(null);
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
    this.subject.next(user);
    let data: string = JSON.stringify(user);
    localStorage.setItem("currentUser", data);
  }
  getCurrentUser(): Observable<User> {
   let user= <User> JSON.parse(localStorage.getItem('currentUser'));
   this.subject.next(user);
  return this.subject;
  }
  logOut(): void{
    this.subject.next(null);
    localStorage.removeItem('currentUser');
  }
}
