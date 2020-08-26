import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { DetailsComponent } from './pages/details/details.component';
import { TitlePipe } from './pipes/title.pipe';

import {HttpClientModule} from '@angular/common/http';
import { OrderApparencePipe } from './pipes/order-apparence.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DetailsComponent,
    TitlePipe,
    OrderApparencePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
