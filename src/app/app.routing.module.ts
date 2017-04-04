import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { VillainsComponent } from './villains/villains.component';

export const appRoutes: Routes = [
    { path: 'heroes', component: HeroesComponent},
    { path: 'villains', component: VillainsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRouteModule {
    
    constructor() {
        console.log('routing');
    }
 }

export const routedComponents = [HeroesComponent, VillainsComponent];