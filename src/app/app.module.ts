import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserStatusService } from "src/app/services/user-status.service";
import { UserStatusDirective } from "src/app/directives/user-status/user-status.directive";

@NgModule({
  declarations: [
    AppComponent,
    UserStatusDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
