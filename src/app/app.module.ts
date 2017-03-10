import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EncryptionComponent } from './encryption/encryption.component';
import { EncryptionService } from './encryption/encryption.service';

@NgModule({
  declarations: [
    AppComponent,
    EncryptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EncryptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
