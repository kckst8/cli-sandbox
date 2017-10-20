import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';

export const heroesRoutes: Routes = [
    { path: 'heroes', component: HeroesComponent},
];

@NgModule({
    imports: [RouterModule.forChild(heroesRoutes)],
    exports: [RouterModule]
})
export class HeroesRouteModule {
    
    constructor() {
        console.log('heroes routing');
    }
 }