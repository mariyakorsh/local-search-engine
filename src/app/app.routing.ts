import { Routes, RouterModule } from "@angular/router";

import { ContentComponent } from "./components/content/content.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import {PlaceListComponent} from "./components/place-list/place-list.component";
import {PlaceComponent} from "./components/place/place.component";

const appRoutes: Routes = [
  {path: "", component: ContentComponent},
  {path: "registration", component: RegistrationComponent},
  {path: "places/:place", component: PlaceListComponent},
  {path: "place", component: PlaceComponent},
  {path: "**", redirectTo: ""}
];
export const routing = RouterModule.forRoot(appRoutes, {enableTracing : true});
