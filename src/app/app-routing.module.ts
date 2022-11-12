import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./engine/pages/home-page/home-page.component";
import {NotFoundPageComponent} from "./engine/pages/not-found-page/not-found-page.component";
import {AboutPageComponent} from "./engine/pages/about-page/about-page.component";

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'about', component: AboutPageComponent},
  {path: '**', pathMatch:'full', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
