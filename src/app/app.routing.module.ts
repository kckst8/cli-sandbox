import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HeroesRouteModule} from './heroes/heroes.routing.module'
import { VillainsComponent } from './villains/villains.component';

export const appRoutes: Routes = [
    { path: 'villains', component: VillainsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes), HeroesRouteModule],
    exports: [RouterModule]
})
export class AppRouteModule {
    
    constructor() {
        console.log('routing');
    }
 }

export const routedComponents = [VillainsComponent];