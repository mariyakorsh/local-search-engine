import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PlacesService} from "../../services/places.service";

declare var ymaps: any;

interface YandexMap extends MVCObject {
  constructor(el: HTMLElement, opts?: any): void;

  geoObjects: any;
}

interface MVCObject {
  addListener(eventName: string, handler: Function): MapsEventListener;
}

interface MapsEventListener {
  remove(): void;
}

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css'],
  providers: [PlacesService]
})
export class PlaceListComponent implements OnInit {
  private place: string;
  public places: any[];

  private _mapResolver: (value?: YandexMap) => void;
  options: any = {
    center: [59.9386300, 30.3141300],
    zoom: 10,
    controls: ['zoomControl', 'typeSelector', 'fullscreenControl'],
    provider: 'yandex#search'
  };
  @ViewChild('yamaps') el: ElementRef;

  constructor(public activatedRout: ActivatedRoute, public placesService: PlacesService) {
  }

  ngOnInit() {
    ymaps.ready().done(() => {
      this.activatedRout.params.subscribe(param => this.place = param['place']);
      this.placesService.getPlaces(this.place).subscribe(value => {
        value.features.map(item => {
          let coord: number[] = item.geometry.coordinates;
          let name: string = item.properties.CompanyMetaData.name;
          map.geoObjects
            .add(new ymaps.Placemark([coord[1], coord[0]], {
              balloonContent: name
            }, {
              preset: 'islands#circleDotIcon',
            }));
        });
        localStorage.setItem('hotels', JSON.stringify(value.features));
      }, error => {
        console.log(error);
      });
      const map = new ymaps.Map(this.el.nativeElement, this.options);
    });

    this.places = JSON.parse(localStorage.getItem('hotels')).map(item => {
      return item.properties.CompanyMetaData;
    });
    console.log(this.places);
  }

}
