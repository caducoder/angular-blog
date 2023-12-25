import { Component, Input } from '@angular/core';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {

  @Input() article: Article = {} as Article
}
