import { Component, OnInit } from '@angular/core';
import {HeroesService} from 'src/app/services/heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  searchByName = '';
  buscarporApariencia = '';
  constructor(public hs: HeroesService) {

    console.log('Im in heroes component');
   }

  ngOnInit(): void {
  }

}
