import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpModule, Http} from '@angular/http';
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { EntrepriseComponent } from './components/entreprise/entreprise.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { BannerComponent } from './components/accueil/components/banner/banner.component';
import { CatalogComponent } from './components/accueil/components/catalog/catalog.component';
import { ClientsComponent } from './components/accueil/components/clients/clients.component';
import { TestimonialComponent } from './components/accueil/components/testimonial/testimonial.component';
import { FormationComponent } from './components/accueil/components/formation/formation.component';
import { MediaComponent } from './components/accueil/components/media/media.component';
import { AccompanyComponent } from './components/entreprise/components/accompany/accompany.component';
import { FeaturesComponent } from './components/entreprise/components/features/features.component';
import { PartnersComponent } from './components/entreprise/components/partners/partners.component';
import { ContactformComponent } from './components/contact/components/contactform/contactform.component';
import { MapComponent } from './components/contact/components/map/map.component';
import { SubscribeComponent } from './components/accueil/components/subscribe/subscribe.component';
import { DiscoverComponent } from './components/entreprise/components/discover/discover.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AccueilComponent,
    EntrepriseComponent,
    ContactComponent,
    FaqsComponent,
    BannerComponent,
    CatalogComponent,
    ClientsComponent,
    TestimonialComponent,
    FormationComponent,
    MediaComponent,
    AccompanyComponent,
    FeaturesComponent,
    PartnersComponent,
    ContactformComponent,
    MapComponent,
    SubscribeComponent,
    DiscoverComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AccueilComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'entreprise',
        component: EntrepriseComponent
      },
      {
        path: 'faqs',
        component: FaqsComponent
      },
      {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
      }
    ]),
    HttpModule,
    TranslateModule.forRoot({
        provide: TranslateLoader,
        useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
        deps: [Http]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
