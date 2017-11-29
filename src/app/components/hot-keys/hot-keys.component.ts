import { Component } from "@angular/core";


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

HotKeyArray: Image[] = [new Image('https://akam3.cdn.jdmagicbox.com/intimages/us/hotkey/website_image/h_travel.jpg?output-quality=100', 'Туристические компании'),
new Image('https://akam4.cdn.jdmagicbox.com/intimages/us/hotkey/website_image/h_flowers.jpg?output-quality=100','Цветочные магазины'),
new Image('https://akam4.cdn.jdmagicbox.com/intimages/us/hotkey/website_image/h_coffeeshops.jpg?output-quality=100','Кофейни'),
new Image('https://akam2.cdn.jdmagicbox.com/intimages/us/hotkey/website_image/h_taxi.jpg?output-quality=100', 'Такси'),
new Image('https://akam1.cdn.jdmagicbox.com/intimages/us/hotkey/website_image/h_restaurants.jpg?output-quality=100','Рестораны'),
new Image('https://akam1.cdn.jdmagicbox.com/intimages/us/hotkey/website_image/h_books.jpg?output-quality=100','Книжные магазины'),
new Image('https://akam4.cdn.jdmagicbox.com/intimages/us/hotkey/website_image/h_hotel.jpg?output-quality=100','Отели'),
new Image('https://akam4.cdn.jdmagicbox.com/intimages/us/hotkey/website_image/h_medical.jpg?output-quality=100','Больницы')]
}

