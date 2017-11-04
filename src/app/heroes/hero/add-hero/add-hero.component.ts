import { Component, OnInit, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { Hero } from 'app/heroes/hero/hero';

@Component({
  selector: 'add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {
  public hero: Hero;
  private wrapperElement; 

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.hero = new Hero();
    console.log(this.el);
  }

  ngAfterViewInit() {
    for (let i = 0; i < this.el.nativeElement.children.length; i++) {
      if (this.el.nativeElement.children[i].id === 'wrapper') {
        this.wrapperElement = this.el.nativeElement.children[i];
      }
    }
  }

  public open() {
    if (this.wrapperElement) {
      this.renderer.setStyle(this.wrapperElement, 'display', 'block');
    }
  }

  public close() {
    if (this.wrapperElement) {
      this.renderer.setStyle(this.wrapperElement, 'display', 'none');
    }
  }
}
