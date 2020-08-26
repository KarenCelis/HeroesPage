import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {
heroes: any[] = [];
  constructor(private http: HttpClient) {
this.loadHeroes();
   
   }
   loadHeroes(){

      return this.http.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
      .subscribe((res: any[])=>{
        this.heroes=res;
        console.log(this.heroes);
      })
  }
}
