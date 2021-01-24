import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { IntroSearchComponent } from './components/intro-search/intro-search.component';
import { FooterComponent } from './components/footer/footer.component';
import { HowitworksComponent } from './pages/howitworks/howitworks.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { WellComponent } from './components/well/well.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    IntroSearchComponent,
    FooterComponent,
    HowitworksComponent,
    LandingPageComponent,
    NotFoundComponent,
    WellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
