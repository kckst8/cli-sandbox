import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { HeroesComponent } from './heroes.component';
import { HeroComponent } from './hero/hero.component';
import { AddHeroComponent } from './hero/add-hero/add-hero.component';
import { HeroesRouteModule } from './heroes.routing.module';

import { HeroesService} from './heroes.service';

 @NgModule({
  declarations: [
    HeroesComponent,
    HeroComponent,
    AddHeroComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    HeroesRouteModule
  ],
  providers: [
    HeroesService
  ]
})
export class HeroesModule { 
      constructor() {
        console.log('heroes module');
    }
}
