import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsApi } from './model/article';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient: HttpClient) { }

  getNews() {
    return this.httpClient.get<NewsApi>(`https://gnews.io/api/v4/top-headlines?category=technology&q=hacked&max=5&apikey=${environment.apiKey}`)
  }
}
