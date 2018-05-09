import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { environment } from '../environments/environment.prod';

import { AppComponent } from './app.component';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { ChatModule } from './chat/chat.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
