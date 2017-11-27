import { Component } from "@angular/core";
import { MasonryModule } from "angular2-masonry";
import { NgModel} from '@angular/forms';

import { Image } from "../../models/image";
import {Router} from "@angular/router";

@Component({
  selector: 'hot-keys',
  templateUrl: './hot-keys.component.html',
  styleUrls: ['./hot-keys.component.css']
})
export class HotKeysComponent{
  constructor(public router: Router){

  }

HotKeyArray: Image[] = [new Image('https://akam3.cdn.jdmagicbox.com/intimages/us/hotkey/website_image/h_travel.jpg?output-quality=100', 'Travel'),
new Image('https://akam4.cdn.jdmagicbox.com/intimages/us/hotkey/website_image/h_flowers.jpg?output-quality=100','Flovers'),
new Image('https://akam4.cdn.jdmagicbox.com/intimages/us/hotkey/website_image/h_coffeeshops.jpg?output-quality=100','Coffee Shops'),
new Image('https://akam2.cdn.jdmagicbox.com/intimages/us/hotkey/website_image/h_taxi.jpg?output-quality=100', 'Taxi'),
new Image('https://akam1.cdn.jdmagicbox.com/intimages/us/hotkey/website_image/h_restaurants.jpg?output-quality=100','Restourant'),
new Image('https://akam1.cdn.jdmagicbox.com/intimages/us/hotkey/website_image/h_books.jpg?output-quality=100','Books'),
new Image('https://akam4.cdn.jdmagicbox.com/intimages/us/hotkey/website_image/h_hotel.jpg?output-quality=100','Hotels'),
new Image('https://akam4.cdn.jdmagicbox.com/intimages/us/hotkey/website_image/h_medical.jpg?output-quality=100','Medical')]
}

