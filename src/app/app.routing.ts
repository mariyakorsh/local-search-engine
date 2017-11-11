import { Routes, RouterModule } from "@angular/router";

import { ContentComponent } from "./components/content/content.component";
import { RegistrationComponent } from "./components/Registration/registration.component";

const appRoutes: Routes = [
  {path: "", component: ContentComponent},
  {path: "registration", component: RegistrationComponent},

  {path: "**", redirectTo: ""}
];
export const routing = RouterModule.forRoot(appRoutes);
