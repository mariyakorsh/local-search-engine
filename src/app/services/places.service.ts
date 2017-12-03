import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PlacesService{
 static url: string = 'https://search-maps.yandex.ru/v1/?apikey=a35720a1-ccf3-40f4-b307-b401700df665';
  constructor(public httpClient: HttpClient){
  }
  public getPlaces (place: string): Observable<any>{
    return this.httpClient.get(PlacesService.url + '&text=' + place + '&lang=ru_RU' + '&type=biz' + '&results=20' + '&ll=30.3141300,59.9386300&spn=0.552069,0.400552');
  }
  public getCities (searchQuary: string): Observable<any>{

    return this.httpClient.get('http://kladr-api.ru/api.php?query=' + searchQuary + '&contentType=city&withParent=1&limit=7');
  }
}
