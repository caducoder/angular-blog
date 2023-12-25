import { Component, Input } from '@angular/core';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {

  @Input() article: Article = {} as Article
}
