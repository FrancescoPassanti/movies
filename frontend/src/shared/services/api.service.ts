import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  defaultHeaders: { [header: string]: string } = {
    'Access-Control-Allow-Origin': '*'
  };

  constructor(private httpClient: HttpClient) {}

  /**
   * GET API
   * @param url
   */
  get(
    url: string,
    headers?: { [header: string]: string },
    params?: { [header: string]: string }
  ): Observable<any> {
    return this.httpClient
      .get<any>(url, {
        headers: this.composeHeader(headers),
        params: params
      })
      .pipe(catchError((error) => this.handleError(error)));
  }

  private composeHeader(headers: { [header: string]: string }) {
    return { ...this.defaultHeaders, ...headers };
  }

  /**
   * Generic handle error
   * @param error
   */
  private handleError(error: Response): Observable<never> {
    let errorMessage = error.statusText;

    switch (error.status) {
      case 0:
        errorMessage = `The url ${error.url} is not reachable`;
        break;
      default:
        errorMessage = error.statusText;
        break;
    }

    return throwError(errorMessage);
  }
}
