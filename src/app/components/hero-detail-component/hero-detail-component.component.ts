import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './../../class/hero';

@Component({
  selector: 'app-hero-detail-component',
  templateUrl: './hero-detail-component.component.html',
  styleUrls: ['./hero-detail-component.component.css']
})
export class HeroDetailComponentComponent implements OnInit {
  @Input() hero: Hero;

  ngOnInit() {

  }

}
