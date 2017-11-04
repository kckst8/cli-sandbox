import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HeroesService } from './heroes.service';
import { Hero } from './hero/hero';
import { AddHeroComponent} from './hero/add-hero/add-hero.component';

@Component({
    selector: 'heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, AfterViewInit {
    public heroes: Array<Hero>;
    public selectedHero: string;

    @ViewChild(AddHeroComponent) addHeroComponent: AddHeroComponent;

    constructor(
        private heroesService : HeroesService
    ) {
    }

    ngOnInit() {
        this.heroesService.getHeroes().subscribe(data => {
            this.heroes = data.heroes;
        });
    }

    ngAfterViewInit() {
        console.log(this.addHeroComponent);
    }

    public selectHero(hero) {
        this.selectedHero = hero;
        console.log(this.selectedHero);
    }

    public addHero() {
        this.addHeroComponent.open();
    }
}