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
  key: string;
  result: string;
  term: string;

  constructor(
    private EncryptionService: EncryptionService
  ) { }

  ngOnInit() {  
    this.setEncryptionChange();
  }

  encrypt(term: string, key?: string){
    let thing = this.EncryptionService.encrypt(term, key);
    
    thing.subscribe(_result => 
        this.result = _result,
        error =>  this.errorMessage = <any>error);
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
