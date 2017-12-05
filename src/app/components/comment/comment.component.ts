import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../models/comment";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
  ngOnInit(): void {
    let arr = <Comment[]> JSON.parse(localStorage.getItem(this.placeName));
    if(arr){
      this.comments = arr;
    }
  }
  @Input() public placeName: string;
  text: string;
  currentUser: User;
  comments: Comment[] = [];
  constructor(public userService: UserService) {
    this.currentUser = userService.getCurrentUser();
  }
  AddComment(): void{
    this.comments.push(new Comment(this.currentUser.username, new Date(), this.text));
    localStorage.setItem(this.placeName, JSON.stringify(this.comments));
    this.text = '';
  }
}
