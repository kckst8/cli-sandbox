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
    public heroes: Array<Hero>;
    public selectedHero: string;

    constructor(
        private heroesService : HeroesService
    ) {
    }

    ngOnInit() {
       // this.heroes = [];
        this.heroesService.getHeroes().subscribe(data => {
            this.heroes = data.heroes;
        });
    }

    public selectHero(hero) {
        this.selectedHero = hero;
        console.log(this.selectedHero);
    }
}