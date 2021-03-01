import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ArticleService } from '../_services';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  getListSubscription: Subscription;

  conditions = {};
  articles = [];

  errorMessage: string;

  constructor(
    private router: Router,
    private articleService: ArticleService
  ) {
    this.conditions = {
      page: 1,
      limit: 10,
      sortBy: 'createdAt',
      order: 'desc'
    };
  }

  ngOnInit() {
    this.getArticles();
  }

  /**
   * Unsubscribe to ensure no memory leaks
   */
  ngOnDestroy(): void {
    if (this.getListSubscription) this.getListSubscription.unsubscribe();
  }

  /**
   * Get Articles Listing
   */
  getArticles() {
    this.articles = [];

    // filter with title
    // this.conditions['title'] = 'Sleek COM1';

    this.getListSubscription = this.articleService.getList(this.conditions).subscribe((result) => {
      if (result && result.length) this.articles = result;
    }, (error) => {
      console.error('ERROR: ', error);
      this.errorMessage = error.error || 'Network problem !!!';
    });
  }

  onClickPagination(page) {
    this.conditions['page'] = page;
    this.getArticles();
  }

  onClickImage(item) {
    if (!item) return;

    this.navigateToDetail(item.id);
  }

  onClickTitle(item) {
    if (!item) return;

    this.navigateToDetail(item.id);
  }

  navigateToDetail(id: string) {
    if (!id) return;

    this.router.navigateByUrl(`/${id}`);
  }
}
