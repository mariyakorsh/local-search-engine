import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {google} from "@agm/core/services/google-maps-types";
import {AgmCoreModule, MapsAPILoader} from '@agm/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";

declare var ymaps: any;
declare var jQuery: any;

interface YandexMap extends MVCObject {
  constructor(el: HTMLElement, opts?: any): void;
  geoObjects: any;
}

interface MVCObject { addListener(eventName: string, handler: Function): MapsEventListener; }
interface MapsEventListener { remove(): void; }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myMap: Promise<YandexMap> = new Promise<YandexMap>((resolve: () => void) => { this._mapResolver = resolve; });
  private _mapResolver: (value?: YandexMap) => void;
  options: any = {
    center: [59.9386300, 30.3141300],
    zoom: 10,
    controls: ['zoomControl', 'typeSelector',  'fullscreenControl'],
    provider: 'yandex#search'
  };

  constructor(private router: Router) {
  }

  @ViewChild('yamaps') el: ElementRef;


  ngOnInit(): void {
    ymaps.ready().done(() => {
      // Программно выполним поиск определённых кафе в текущей
      // прямоугольной области карты.

      const map = new ymaps.Map(this.el.nativeElement, this.options);

      var searchControl = new ymaps.control.SearchControl({
        options: {
          provider: 'yandex#search'
        }
      });

      map.controls.add(searchControl);
      searchControl.search('Шоколадница');
      this._mapResolver(<YandexMap>map);

      map.events.add('click', this.clickMaps, this);
    });
  }

  clickMaps(e: any) {
    let coords = e.get('coords');
  }
}
