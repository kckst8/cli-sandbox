import { Component, OnInit } from '@angular/core';

import { HeroesService } from './heroes.service';
import { Hero } from './hero';

@Component({
    selector: 'heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    private heroes: Array<Hero>;
    private selectedHero: string;

    constructor(
        private heroesService : HeroesService
    ) {
    }

    ngOnInit() {
        this.heroesService.getHeroes().then(heroes => this.heroes = heroes);
    }

    public selectHero(hero) {
        this.selectedHero = hero;
    }
}