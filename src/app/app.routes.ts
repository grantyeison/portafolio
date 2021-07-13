
import { RouterModule, Routes } from '@angular/router';
import {
  AboutComponent,
  PortafolioComponent,
  ItemComponent,
  SkillsComponent
} from "./components/index.paginas";


const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item', component: ItemComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});
