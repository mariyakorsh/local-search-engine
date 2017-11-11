import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from "@angular/forms";
import { MasonryModule } from "angular2-masonry";

import { AppComponent } from './app.component';
import {HeaderComponent } from "./components/header/header.component";
import {ContentComponent} from "./components/content/content.component";
import {HotKeysComponent} from "./components/hot-keys/hot-keys.component";
import {RegistrationComponent} from "./components/Registration/registration.component";
import {UserService} from "./services/user.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    HotKeysComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    MasonryModule
    ],
  providers: [UserService],
  bootstrap: [AppComponent],
  exports: [RegistrationComponent]
})
export class AppModule { }
