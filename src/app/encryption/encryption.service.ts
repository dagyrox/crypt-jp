import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class EncryptionService {

  constructor(
    private Http: Http
  ) { }

  encrypt(term: string, key?: string): Observable<string>{
    let queryString = 'term=' +  term + (key?'&key='+key:'');

    return this.Http.get('http://jpsvc.com/encrypt?'+queryString)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  decrypt(term: string, key?: string): Observable<string>{
    let queryString = 'term=' +  term + (key?'&key='+key:'');

    return this.Http.get('http://jpsvc.com/decrypt?'+queryString)
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
