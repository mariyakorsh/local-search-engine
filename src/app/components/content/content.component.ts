import { Component } from "@angular/core";

import './content.component.css'
import { Image } from "../../models/image";
@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  imageArray: Image[] = [new Image('../../assets/movies.png','Movies'),
     new Image('../../assets/restoran.jpg','Restaurants'),
    new Image('../../assets/hotel.jpg','Hotels')];
  currentImage: number = 0;
  Prev(){
    if(this.currentImage==0){
      this.currentImage = this.imageArray.length -1;
    }
    else {
      this.currentImage = this.currentImage - 1;
    }
  }
  Next(){
    if (this.currentImage == this.imageArray.length - 1){
      this.currentImage = 0;
    }
    else {
      this.currentImage = this.currentImage + 1;
    }
  }
  }
