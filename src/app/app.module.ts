import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { AppRouteModule, routedComponents } from './app.routing.module';

import {HeroesModule} from './heroes/heroes.module'

@NgModule({
  declarations: [
    AppComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
      constructor() {
        console.log('app module');
    }
}
