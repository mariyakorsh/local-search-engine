import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {
  private place: string;
  constructor(public activatedRout: ActivatedRoute) {
     activatedRout.params.subscribe(param=>this.place=param['place']);
  }

  ngOnInit() {
  }

}
