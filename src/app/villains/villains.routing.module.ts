import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { VillainsComponent } from './villains.component';

export const appRoutes: Routes = [
    { path: 'villains', component: VillainsComponent},
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class VillainsRouteModule {
    constructor() {
        console.log('villains routing');
    }
 }