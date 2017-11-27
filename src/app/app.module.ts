import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MasonryModule } from "angular2-masonry";

import { AppComponent } from './app.component';
import {HeaderComponent } from "./components/header/header.component";
import {ContentComponent} from "./components/content/content.component";
import {HotKeysComponent} from "./components/hot-keys/hot-keys.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {UserService} from "./services/user.service";
import { ProfileComponent } from './components/profile/profile.component';
import { PlaceListComponent } from './components/place-list/place-list.component';
import { PlaceComponent } from './components/place/place.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    HotKeysComponent,
    RegistrationComponent,
    ProfileComponent,
    PlaceListComponent,
    PlaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MasonryModule,
    routing,
    ],
  providers: [UserService],
  bootstrap: [AppComponent],
  exports: [RegistrationComponent, PlaceComponent]
})
export class AppModule { }
