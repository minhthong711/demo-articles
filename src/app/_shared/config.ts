import { environment } from './../../environments/environment';

export const APP_CONFIG: any = {
  // api path
  BASE_API_LINK: {
    ARTICLE: environment.api.url + '/blogs',
  }
}
