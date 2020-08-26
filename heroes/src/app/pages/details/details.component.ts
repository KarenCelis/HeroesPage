import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details: any = '';
  constructor(private route: ActivatedRoute, public hs: HeroesService) {

    route.params.subscribe(data => {
      console.log(data['id']);
      hs.details(data['id']).subscribe(res => {
        this.details = res;
        console.log(this.details);
      });

    });
  }

  ngOnInit(): void {
  }

}
