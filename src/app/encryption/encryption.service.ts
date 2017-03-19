import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class EncryptionService {
  debugUrl = 'http://localhost:3000';
  produrl = 'http://jpsvc.com';
  prod = true;

  constructor(
    private Http: Http
  ) { }

  encrypt(term: string, key?: string): Observable<string>{
    let url = (this.prod ? this.produrl : this.debugUrl) + '/encrypt';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers : headers});
    let body = {'term': term, 'key': key};

    return this.Http.post(url, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  decrypt(term: string, key?: string): Observable<string>{
    let url = (this.prod ? this.produrl : this.debugUrl) + '/decrypt';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers : headers});
    let body = {'term': term, 'key': key};

    return this.Http.post(url, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: any) {
    return res._body || '';
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
