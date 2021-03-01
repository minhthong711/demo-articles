import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Utils } from '../_helpers';

export abstract class BaseService {
    constructor(protected http: HttpClient, protected url?: string) { }

    // For RESTFul requests
    getList(conditions: any): Observable<any> {
        return this.http
            .get<any>(`${this.url}?${Utils.standardizeParam(conditions)}`)
            .pipe(
                tap(response => response)
            );
    }

    getById(id: string): Observable<any> {
        return this.http
            .get<any>(`${this.url}/${id}`)
            .pipe(
                tap(response => response)
            );
    }
}
