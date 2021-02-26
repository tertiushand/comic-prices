import { Component, OnInit } from '@angular/core';

import { PublicComicsService } from './shared/api/marvel/public-comics.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'comic-prices';

  constructor(
    private publicComics: PublicComicsService
  ){}

  ngOnInit() {
    this.publicComics.getPublicComics({
      title: 'X-Men',
      issueNumber: 1
    }).subscribe(comics => {
      console.log(comics);
    });
  }
}
