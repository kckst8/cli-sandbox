import { NgModule} from '@angular/core';
import {VillainsComponent} from './villains.component';
import { VillainsRouteModule} from './villains.routing.module';

 @NgModule({
    declarations: [
        VillainsComponent
    ],
    imports: [
        VillainsRouteModule
    ],
    providers: []
 })
 export class VillainsModule {
     constructor(){
         console.log('villains module');
     }
 }

 