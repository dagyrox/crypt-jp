import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Subscription} from 'rxjs/Rx';

import { EncryptionService } from './encryption.service';

@Component({
  selector: 'app-encryption',
  templateUrl: './encryption.component.html',
  styleUrls: ['./encryption.component.css']
})
export class EncryptionComponent implements OnInit {
  actionId: number = 0;
  actions: Array<any> = [{id: 0, text: 'Encrypt'}, {id: 1, text: 'Decrypt'}];
  buttonText: string = 'Do IT!';
  errorMessage: string;
  greetingMessage = 'Hi there.  Here is a simple encrypt / decrypt app. You may provide an encryption key of your own if you\'d like(more secure), or you could let us use our default one for you(not as secure).  Enjoy!';
  key: string;
  result: string;
  submitted = false;
  term: string;

  constructor(
    private EncryptionService: EncryptionService
  ) { }

  ngOnInit() {  
    this.setEncryptionChange();
  }

  clearIt(){
    this.key = '';
    this.result = '';
    this.term = '';
    this.submitted = false;
  }

  decrypt(term: string, key?: string){
    let thing = this.EncryptionService.decrypt(term, key);
    
    thing.subscribe(_result => 
        this.result = _result,
        error =>  this.errorMessage = <any>error);
  }

  doIt(){
    if(this.actionId == 0){
      this.encrypt(this.term, this.key);
    } else {
      this.decrypt(this.term, this.key);
    }
  }

  encrypt(term: string, key?: string){
    this.submitted = true;

    if(!term){
      return;
    }

    let thing = this.EncryptionService.encrypt(term, key);
    
    thing.subscribe(_result => 
        this.result = _result,
        error =>  this.errorMessage = <any>error);
  }

  setEncryptionChange(){
    let selectedAction = this.actions.find((action: any) => {
        return action.id == this.actionId;}
      );

    this.buttonText = selectedAction ? selectedAction.text : 'Do IT!';

    this.term = this.result || this.term;
    this.result = '';

    if(this.term){
      this.doIt();
    }
  }
}
