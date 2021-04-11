import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://i.guim.co.uk/img/media/9ab8e837b70b5fb00ac396d2ca4d14fcf85ba9d2/0_107_7614_4568/master/7614.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=941b9ca258714cdf2c15bee5029a5c35'),
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://i.guim.co.uk/img/media/9ab8e837b70b5fb00ac396d2ca4d14fcf85ba9d2/0_107_7614_4568/master/7614.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=941b9ca258714cdf2c15bee5029a5c35')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
