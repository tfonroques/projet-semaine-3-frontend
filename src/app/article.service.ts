import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article } from './article';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  addArticle(article: Article) {
    console.log('article', article);
    return this.http.post(`${environment.apiUrl}/api/articles`, article).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getArticles() {
    return this.http.get(`${environment.apiUrl}/api/articles`).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
