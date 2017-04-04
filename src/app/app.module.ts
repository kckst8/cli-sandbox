import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRouteModule, routedComponents } from './app.routing.module';
import { HeroesService } from './heroes/heroes.service';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouteModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { 
      constructor() {
        console.log('app module');
    }
}
