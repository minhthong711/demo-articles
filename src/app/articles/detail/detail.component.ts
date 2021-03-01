import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArticleService } from 'src/app/_services';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  getItemtSubscription: Subscription;

  item;
  
  id: string;
  errorMessage: string;

  constructor(
    private activeRouter: ActivatedRoute,
    private articleService: ArticleService
  ) {
    this.activeRouter.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.getArticle();
  }

  /**
   * Unsubscribe to ensure no memory leaks
   */
  ngOnDestroy(): void {
    if (this.getItemtSubscription) this.getItemtSubscription.unsubscribe();
  }

  /**
   * Get Article By Id
   */
  getArticle() {
    this.getItemtSubscription = this.articleService.getById(this.id).subscribe((result) => {
      if (result) this.item = result;
    }, (error) => {
      console.error('ERROR: ', error);
      this.errorMessage = error.error || 'Network problem !!!';
    });
  }
}
