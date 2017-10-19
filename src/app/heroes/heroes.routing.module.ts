import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';

export const appRoutes: Routes = [
    { path: 'heroes', component: HeroesComponent},
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class HeroesRouteModule {
    
    constructor() {
        console.log('heroes routing');
    }
 }