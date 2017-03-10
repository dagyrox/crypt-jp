import { Component, OnInit } from '@angular/core';

import { EncryptionService } from './encryption.service';

@Component({
  selector: 'app-encryption',
  templateUrl: './encryption.component.html',
  styleUrls: ['./encryption.component.css']
})
export class EncryptionComponent implements OnInit {

  constructor(
    private EncryptionService: EncryptionService
  ) { }

  ngOnInit() {
    let hello = this.EncryptionService.encrypt('hello');
    hello.subscribe(val => console.log(val));
    let world = this.EncryptionService.decrypt('world');
  }

}
