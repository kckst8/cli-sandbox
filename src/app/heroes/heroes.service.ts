import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise'; //If using toPromise

import { Hero } from './hero/hero';

@Injectable ()
export class HeroesService {
    public heroes: Array<string>;

    constructor(
        private http:  Http
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
    
     getHeroes(): Observable<Array<Hero>> {
        return this.http
        .get('src/app/heroes/heroes.json')
        .map(response => response.json().heroes as Hero[]);
    }
}