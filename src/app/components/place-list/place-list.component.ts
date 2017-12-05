import {Component, DoCheck, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PlacesService} from "../../services/places.service";
import {Phone, Place} from "../../models/place";
import {Subject} from "rxjs/Subject";

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
export class PlaceListComponent implements OnInit{
  private place: string;
  public places: Place[] = [];
  public subject: Subject<Place[]> = new Subject();

  options: any = {
    center: [59.9386300, 30.3141300],
    zoom: 10,
    controls: ['zoomControl', 'typeSelector', 'fullscreenControl'],
    provider: 'yandex#search'
  };
  @ViewChild('yamaps') el: ElementRef;

  constructor( public activatedRout: ActivatedRoute, public placesService: PlacesService) {
    let arr = <Place[]> JSON.parse(localStorage.getItem('places'));
    if(arr){
      this.places = arr;
    }
    this.subject.subscribe(a => this.places = a);
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
        let pls = value.features.map(item => {
          return  new Place(
            item.properties.CompanyMetaData.name,
            item.properties.CompanyMetaData.address,
            item.properties.CompanyMetaData.Hours,
            <Phone[]> item.properties.CompanyMetaData.Phones
          )
        });
        this.subject.next(pls);
        localStorage.setItem('places', JSON.stringify(pls));
      }, error => {
        console.log(error);
      });
      const map = new ymaps.Map(this.el.nativeElement, this.options);
    });
  }

}
