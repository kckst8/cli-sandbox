import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
   { path: '', redirectTo: '/heroes', pathMatch: 'full'},
   { path: '**', component: HomeComponent }
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