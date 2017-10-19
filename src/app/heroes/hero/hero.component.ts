import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() hero: Hero;

  constructor() { 
    console.log(this.hero);
  }

  ngOnInit() {
  }

}
