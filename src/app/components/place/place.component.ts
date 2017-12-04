import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent {
  name: string;
  constructor( public activetedRoute: ActivatedRoute) {
    activetedRoute.params.subscribe(param =>this.name = param['name'])
  }
}
