import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss'],
})
export class NewArticleComponent implements OnInit {
  @Input() article: Article = new Article();
  addingTag = false;
  addQCM = false;
  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit(): void {}

  addArticle(f: NgForm) {
    const tags = f.form.value.tags.replace(/\s/g, '').split(',');
    this.article.tags = tags;

    this.articleService.addArticle(this.article).subscribe(
      (res) => {
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
