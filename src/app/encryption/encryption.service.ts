import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EncryptionService {

  constructor(
    private Http: Http
  ) { }

  encrypt(term: string): Observable<string>{
    console.log('encrypt: ' + term);

    return this.Http.get('http://localhost:3000?term='+term)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  decrypt(term: string){
    console.log('decrypt: ' + term);
    return term;
  }

}
