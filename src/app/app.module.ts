import { AlertModule } from 'ng2-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// https://www.npmjs.com/package/angular2-clipboard
import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';
import { EncryptionComponent } from './encryption/encryption.component';
import { EncryptionService } from './encryption/encryption.service';

@NgModule({
  declarations: [
    AppComponent,
    EncryptionComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    ClipboardModule,
    FormsModule,
    HttpModule
  ],
  providers: [EncryptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
