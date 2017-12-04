import { Component } from "@angular/core";


import { Image } from "../../models/image";
import {Router} from "@angular/router";

@Component({
  selector: 'hot-keys',
  templateUrl: './hot-keys.component.html',
  styleUrls: ['./hot-keys.component.css']
})
export class HotKeysComponent{
  constructor(){

  }

HotKeyArray: Image[] = [new Image('https://akam3.cdn.jdmagicbox.com/intimages/us/hotkey/website_image/h_travel.jpg?output-quality=100', 'Туристические компании', 'Первый шаг к путешествиям'),
new Image('https://akam4.cdn.jdmagicbox.com/intimages/us/hotkey/website_image/h_flowers.jpg?output-quality=100','Цветочные магазины', 'Розы, тюльпаны, пионы. Цветы на любой вкус!'),
new Image('https://akam4.cdn.jdmagicbox.com/intimages/us/hotkey/website_image/h_coffeeshops.jpg?output-quality=100','Кофейни', 'Для истиных кофеманов'),
new Image('https://akam2.cdn.jdmagicbox.com/intimages/us/hotkey/website_image/h_taxi.jpg?output-quality=100', 'Такси', 'В любое место, в любое время!'),
new Image('https://akam1.cdn.jdmagicbox.com/intimages/us/hotkey/website_image/h_restaurants.jpg?output-quality=100','Рестораны', 'Проведите вечер с любимыми в уютном месте'),
new Image('https://akam1.cdn.jdmagicbox.com/intimages/us/hotkey/website_image/h_books.jpg?output-quality=100','Книжные магазины', 'Любой книжный червь найдет себе книгу по вкусу в книжных магазинах города'),
new Image('https://akam4.cdn.jdmagicbox.com/intimages/us/hotkey/website_image/h_hotel.jpg?output-quality=100','Отели', 'Для гостей города огромный выбор отелей'),
new Image('https://akam4.cdn.jdmagicbox.com/intimages/us/hotkey/website_image/h_medical.jpg?output-quality=100','Больницы', 'Найдите поликлинику рядом с вашим домом')]
}

