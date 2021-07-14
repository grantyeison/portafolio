
import { RouterModule, Routes } from '@angular/router';
import {
  AboutComponent,
  PortafolioComponent,
  ItemComponent,
  ExperienciaComponent,
  TrabajosComponent,
  InteresesComponent,
  SkillsComponent
} from "./components/index.paginas";


const app_routes: Routes = [
  { path: '', component: PortafolioComponent}
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item', component: ItemComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'trabajos', component: TrabajosComponent },
  { path: 'intereses', component: InteresesComponent }
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});
