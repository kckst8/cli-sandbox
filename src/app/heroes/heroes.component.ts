import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HeroesService } from './heroes.service';
import { Hero } from './hero/hero';

@Component({
    selector: 'heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    public heroes: Observable<Array<Hero>>;
    public selectedHero: string;

    constructor(
        private heroesService : HeroesService
    ) {
    }

    ngOnInit() {
       // this.heroes = [];
        this.heroes = this.heroesService.getHeroes();
        // change heroes to just arrary and remove async pipe if using this      
        // this.heroesService.getHeroes().subscribe(heroes => {
        //     this.heroes = heroes;
        // });
    }

    public selectHero(hero) {
        this.selectedHero = hero;
    }
}