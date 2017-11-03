import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/toPromise'; //If using toPromise

import { HeroesResponse } from './hero/hero';

@Injectable ()
export class HeroesService {
 //   public heroes: Array<string>;

    constructor(
        private http:  HttpClient 
    ) {

    }
    // getHeroes(): Promise<Array<Hero>> {
    //     return this.http
    //     .get('src/app/heroes/heroes.json')
    //     .toPromise()
    //     .then((response)=> {
    //         return response.json().heroes as Hero[];
    //     })
    //     .catch((error) => {
    //         Promise.reject(error.errorMessage || error);
    //     });
    // }
    
     getHeroes(): Observable<HeroesResponse> {
        return this.http
        .get<HeroesResponse>('assets/heroes.json');
    }
}