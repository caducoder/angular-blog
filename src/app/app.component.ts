import { Component, OnInit } from '@angular/core';
import { Article } from './model/article';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angular-blog';
  isMenuOpen: boolean = false
  posts: Article[] = []

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getNews()
      .subscribe((response) => {
        this.posts = response?.articles!.map(ar => {
          return {
            ...ar,
            publishedAt: new Intl.DateTimeFormat('en-US', {
              dateStyle: 'long'
            }).format(new Date(ar.publishedAt))
          }
        })
      })
  }
}
