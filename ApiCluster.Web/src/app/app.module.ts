import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

/* Components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthenticationComponent } from './components/authentication/authetication.component';


/* Pages */

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';



/* Services */
import { AuthenticationService } from './Services/authentication/authentication.service';
import { AppConfigService } from './Services/appConfiguration/appConfig.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    
    FooterComponent,
    
    LandingPageComponent,
    NotFoundComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
