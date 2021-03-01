import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base.service';
import { APP_CONFIG } from '../../_shared/config';

@Injectable({ providedIn: 'root' })
export class ArticleService extends BaseService {
  constructor(protected http: HttpClient) {
    super(http, APP_CONFIG.BASE_API_LINK.ARTICLE);
  }
}
