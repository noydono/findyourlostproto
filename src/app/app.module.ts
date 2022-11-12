import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './engine/pages/home-page/home-page.component';
import { AboutPageComponent } from './engine/pages/about-page/about-page.component';
import { NotFoundPageComponent } from './engine/pages/not-found-page/not-found-page.component';
import { FooterComponent } from './engine/ui/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    NotFoundPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
